import { NextRequest, NextResponse } from 'next/server';
import { fetchStrapiAPI } from '@/app/utils/helpers';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') || '1';

  let query = `api/events?sort[0]=publishedAt:desc&populate[0]=cover&fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=date&fields[4]=eventId&pagination[pageSize]=10&pagination[page]=${page}&publicationState=live&locale[0]=en`;

  try {
    const events = await fetchStrapiAPI(query);
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Error fetching events' },
      { status: 500 }
    );
  }
}
