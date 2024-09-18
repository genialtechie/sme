import Image from 'next/image';

// component to return different cover depending on desktop or mobile
export function EventCover({
  rave,
  className,
}: {
  rave: any;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="block md:hidden">
        <Image
          src={rave.attributes.cover.data.attributes.url}
          alt={rave.attributes.title}
          width={500}
          height={500}
        />
      </div>
      <div className="relative hidden md:block ">
        <Image
          src="/tape2.png"
          alt="tape"
          width={150}
          height={150}
          className="w-[150px] h-[100px] absolute top-1/2 right-64"
        />
        <Image
          src={rave.attributes.cover.data.attributes.url}
          alt={rave.attributes.title}
          width={750}
          height={750}
          className="m-auto object-contain h-[750px] w-[750px]"
        />
        <Image
          src="/tape3.png"
          alt="tape"
          width={150}
          height={150}
          className="w-[150px] h-[100px] absolute top-1/2 left-64"
        />
      </div>
    </div>
  );
}

export default function EventPage({ rave }: { rave: any }) {
  return (
    <section>
      <EventCover
        rave={rave}
        className="md:mt-16 mt-5"
      />
    </section>
  );
}
