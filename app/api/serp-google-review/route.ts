import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { SearchAPIResponse, CachedReview, ReviewsCache } from '@/types/reviews';

// Cache file location
const CACHE_FILE_PATH = path.join(process.cwd(), 'lib', 'data', 'reviews-cache.json');

// SearchAPI configuration
const SEARCHAPI_URL = 'https://www.searchapi.io/api/v1/search';
const DATA_ID = '0x8d64a713f8717419:0x4cb8cdfc07e644a8';
const NUM_REVIEWS = 10;

// Minimum rating to consider a review as "positive"
const MIN_POSITIVE_RATING = 4;

/**
 * Check if the cache should be refreshed
 * - Refresh if today is the 1st of the month AND cache is from a different month
 */
function shouldRefreshCache(lastFetched: string): boolean {
    const today = new Date();
    const lastFetchDate = new Date(lastFetched);

    // Check if today is the 1st of the month
    const isFirstOfMonth = today.getDate() === 1;

    // Check if cache is from a different month/year
    const isDifferentMonth =
        lastFetchDate.getMonth() !== today.getMonth() ||
        lastFetchDate.getFullYear() !== today.getFullYear();

    return isFirstOfMonth && isDifferentMonth;
}

/**
 * Fetch reviews from SearchAPI
 */
async function fetchFromSearchAPI(apiKey: string): Promise<ReviewsCache> {
    const url = new URL(SEARCHAPI_URL);
    url.searchParams.set('engine', 'google_maps_reviews');
    url.searchParams.set('data_id', DATA_ID);
    url.searchParams.set('hl', 'en');
    url.searchParams.set('num', NUM_REVIEWS.toString());
    url.searchParams.set('api_key', apiKey);

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error(`SearchAPI request failed: ${response.status} ${response.statusText}`);
    }

    const data: SearchAPIResponse = await response.json();

    if (!data.reviews || data.reviews.length === 0) {
        throw new Error('No reviews returned from SearchAPI');
    }

    // Transform and filter to positive reviews only
    const positiveReviews: CachedReview[] = data.reviews
        .filter(review => review.rating >= MIN_POSITIVE_RATING && review.text?.trim())
        .map(review => ({
            text: review.text,
            author: review.user.name,
            rating: review.rating,
            link: review.link,
            date: review.date,
            thumbnail: review.user.thumbnail,
        }));

    return {
        lastFetched: new Date().toISOString(),
        placeRating: data.place_result?.rating,
        totalReviews: data.place_result?.reviews,
        reviews: positiveReviews,
    };
}

/**
 * Read cache from file
 */
async function readCache(): Promise<ReviewsCache | null> {
    try {
        const cacheContent = await fs.readFile(CACHE_FILE_PATH, 'utf-8');
        return JSON.parse(cacheContent) as ReviewsCache;
    } catch (error) {
        // Cache doesn't exist or is invalid
        return null;
    }
}

/**
 * Write cache to file
 */
async function writeCache(cache: ReviewsCache): Promise<void> {
    // Ensure directory exists
    const dir = path.dirname(CACHE_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });

    await fs.writeFile(CACHE_FILE_PATH, JSON.stringify(cache, null, 2), 'utf-8');
}

export async function GET() {
    try {
        const apiKey = process.env.SEARCHAPI_KEY;

        if (!apiKey) {
            console.error('SEARCHAPI_KEY environment variable is not configured');
            return NextResponse.json({
                reviews: [],
                error: 'API key not configured',
                message: 'Please add SEARCHAPI_KEY to your environment variables'
            });
        }

        // Try to read existing cache
        let cache = await readCache();

        // Determine if we need to fetch fresh data
        const needsFetch = !cache || shouldRefreshCache(cache.lastFetched);

        if (needsFetch) {
            console.log(cache ? 'Refreshing reviews cache (1st of month)' : 'Creating initial reviews cache');

            try {
                cache = await fetchFromSearchAPI(apiKey);
                await writeCache(cache);
                console.log(`Cached ${cache.reviews.length} positive reviews`);
            } catch (fetchError) {
                console.error('Error fetching from SearchAPI:', fetchError);

                // If we have old cache, use it as fallback
                if (cache) {
                    console.log('Using stale cache as fallback');
                } else {
                    return NextResponse.json({
                        reviews: [],
                        error: 'Failed to fetch reviews',
                        details: fetchError instanceof Error ? fetchError.message : 'Unknown error'
                    }, { status: 500 });
                }
            }
        }

        return NextResponse.json({
            reviews: cache!.reviews,
            placeRating: cache!.placeRating,
            totalReviews: cache!.totalReviews,
            cached: !needsFetch,
            lastFetched: cache!.lastFetched,
        });

    } catch (error) {
        console.error('Error in serp-google-review API:', error);
        return NextResponse.json({
            reviews: [],
            error: 'Internal server error',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
