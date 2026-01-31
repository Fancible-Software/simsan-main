/**
 * Types for SearchAPI Google Maps Reviews integration
 */

// Raw review from SearchAPI response
export interface SearchAPIReview {
    review_id: string;
    user: {
        name: string;
        link: string;
        contributor_id: string;
        is_local_guide?: boolean;
        reviews: number;
        photos: number;
        thumbnail: string;
    };
    link: string;
    source: string;
    text: string;
    rating: number;
    date: string;
    iso_date: string;
    images?: Array<{
        id: string;
        image: string;
    }>;
    response?: {
        date: string;
        iso_date: string;
        text: string;
    };
}

// SearchAPI full response structure
export interface SearchAPIResponse {
    search_metadata: {
        id: string;
        status: string;
        created_at: string;
    };
    place_result: {
        title: string;
        phone: string;
        rating: number;
        reviews: number;
    };
    reviews: SearchAPIReview[];
}

// Cached review for frontend display
export interface CachedReview {
    text: string;
    author: string;
    rating: number;
    link: string;
    date: string;
    thumbnail?: string;
}

// Cache file structure
export interface ReviewsCache {
    lastFetched: string;
    placeRating?: number;
    totalReviews?: number;
    reviews: CachedReview[];
}
