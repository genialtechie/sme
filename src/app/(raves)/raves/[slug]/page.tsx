import { fetchStrapiAPI } from '@/app/utils/helpers';
import EventPage from '@/app/components/EventPage';

async function getRave(slug: string) {
  const events = await fetchStrapiAPI(
    `api/events?filters[slug][$eq]=${slug}&populate=*&publicationState=live&locale[0]=en`
  );
  return events[0];
}

export default async function RavePage({
  params,
}: {
  params: { slug: string };
}) {
  const rave = await getRave(params.slug);
  return <EventPage rave={rave} />;
}
