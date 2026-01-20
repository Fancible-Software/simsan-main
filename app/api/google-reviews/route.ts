import { NextResponse } from 'next/server';

// Google Place ID for Simsan Fraser Maintenance Ltd
// You can find this by using Google Place ID Finder: https://developers.google.com/maps/documentation/places/web-service/place-id
// Or extract from your business URL
const PLACE_ID = 'ChIJN1t_tDeuBzURiWrW7gLQJQ8'; // Replace with your actual Place ID

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || process.env.GOOGLE_PLACES_API_KEY;
    
    if (!apiKey) {
      console.error('Google Places API key is not configured');
      // Return empty reviews instead of error so the component still works
      return NextResponse.json({ 
        reviews: [],
        error: 'API key not configured',
        message: 'Please add NEXT_PUBLIC_GOOGLE_PLACES_API_KEY to your environment variables'
      });
    }

    // Fetch place details including reviews
    // Using the Place Details API with reviews field
    const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total,formatted_address&key=${apiKey}`;
    
    const response = await fetch(placeDetailsUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    if (data.status === 'REQUEST_DENIED') {
      console.error('Google Places API error:', data.error_message);
      return NextResponse.json(
        { 
          reviews: [],
          error: 'API request denied',
          details: data.error_message 
        },
        { status: 403 }
      );
    }

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message);
      return NextResponse.json(
        { 
          reviews: [],
          error: 'Failed to fetch reviews',
          details: data.error_message || data.status 
        },
        { status: 500 }
      );
    }

    if (data.result && data.result.reviews) {
      // Transform Google reviews to match our component structure
      // Filter to show only reviews with text (some reviews might be rating-only)
      const reviews = data.result.reviews
        .filter((review: any) => review.text && review.text.trim().length > 0)
        .map((review: any) => ({
          text: review.text,
          author: review.author_name,
          rating: review.rating,
          time: review.time,
          profilePhotoUrl: review.profile_photo_url,
        }));

      return NextResponse.json({
        reviews,
        rating: data.result.rating,
        totalRatings: data.result.user_ratings_total,
        businessName: data.result.name,
      });
    }

    return NextResponse.json({ reviews: [] });
  } catch (error: any) {
    console.error('Error fetching Google Reviews:', error);
    return NextResponse.json(
      { 
        reviews: [],
        error: 'Internal server error',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
