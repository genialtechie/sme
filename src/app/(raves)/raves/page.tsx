import PulseAnimation from '@/app/components/PulseAnimation';
import { fetchStrapiAPI } from '@/app/utils/helpers';
import Events from '@/app/components/Events';

export default async function Raves() {
  const initialEvents = await getRaves();
  return (
    <section>
      <PulseAnimation />
      <h3 className="text-center text-3xl font-bold my-7 font-handwriting whitespace-nowrap">
        Feel the Beat, Live the Moment
      </h3>
      <h3 className="text-center text-black/50 my-7 font-kalnia uppercase whitespace-nowrap">
        Na Seniormen get the show
      </h3>
      <Events initialEvents={initialEvents} />
    </section>
  );
}

async function getRaves() {
  return await fetchStrapiAPI(
    'api/events?sort[0]=publishedAt:desc&populate[0]=cover&fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=date&fields[4]=eventId&pagination[pageSize]=12&pagination[page]=1&publicationState=live&locale[0]=en'
  );
}
