import { Suspense } from 'react';
import { fetchStrapiAPI } from '@/app/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';

async function fetchEvents() {
  return await fetchStrapiAPI(
    'api/events?sort[0]=publishedAt:desc&populate[0]=cover&fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=date&fields[4]=eventId&pagination[pageSize]=10&pagination[page]=1&publicationState=live&locale[0]=en'
  );
}

export default async function EventsWidget({
  props,
}: {
  props: any;
}): Promise<JSX.Element> {
  const events = await fetchEvents();

  return (
    <section
      {...props}
      className="w-full h-fit overflow-x-hidden"
    >
      <div className="flex flex-row overflow-x-scroll no-scrollbar mx-2 md:w-fit md:mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          {events.map((event: any) => (
            <Link
              href={`/raves/${event.attributes.slug}`}
              className="h-fit w-fit mx-2"
              key={event.attributes.eventId}
            >
              <div className="w-72 h-fit">
                <div className="flex flex-col mb-1">
                  <h1 className="font-inter text-xl font-bold">
                    {event.attributes.date.replace(/-/g, '.')}
                  </h1>
                  <h3 className="font-inter mb-1 text-xl truncate">
                    {event.attributes.title}
                  </h3>
                </div>
                <div className="w-64 mx-auto">
                  <Image
                    src={event.attributes.cover.data.attributes.url}
                    alt={event.attributes.title}
                    className="w-full h-full object-cover"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            </Link>
          ))}
        </Suspense>
      </div>
    </section>
  );
}
