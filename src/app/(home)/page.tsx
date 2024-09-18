import SuscribeForm from '@/app/components/SuscribeForm';
import Image from 'next/image';
import EventsWidget from '@/app/components/EventsWidget';
import TextScroll from '@/app/components/TextScroll';
import Photos from '@/app/components/Photos';

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <h1 className="w-fit my-4 mx-auto text-6xl md:text-9xl font-serif font-bold whitespace-nowrap tracking-tighter md:tracking-normal overflow-hidden">
        SENI
        <Image
          src="/logo.png"
          alt="Seniormen Logo"
          width={55}
          height={55}
          className="inline-block md:scale-150 pb-4 md:px-2"
          priority
        />
        RMEN
      </h1>
      <EventsWidget props={{ className: 'mb-5' }} />
      <TextScroll />
      <Photos />
      <SuscribeForm />
    </section>
  );
}
