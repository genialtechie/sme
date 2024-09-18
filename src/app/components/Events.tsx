'use client';

import { useInfiniteScroll } from '@/app/hooks/useInfiniteScroll';
import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Events({ initialEvents }: { initialEvents: any[] }) {
  const fetchEvents = useCallback(async (page: number) => {
    const response = await fetch(`/api/raves?page=${page}`);
    return response.json();
  }, []);

  const {
    items: events,
    hasMore,
    loading,
  } = useInfiniteScroll({
    initialItems: initialEvents,
    fetchMore: fetchEvents,
  });

  return (
    <section>
      <div className="h-fit w-full grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-5 p-1 md:p-5">
        {events.map((event: any) => (
          <Link
            href={`/raves/${event.attributes.slug}`}
            className="h-fit w-fit "
            key={event.id}
          >
            <Image
              src={event.attributes.cover.data.attributes.url}
              alt={event.attributes.title}
              className="w-full h-full object-cover"
              width={150}
              height={150}
            />
          </Link>
        ))}
      </div>
      {loading && <div>Loading...</div>}
      {!hasMore && <p>No more events to load.</p>}
    </section>
  );
}
