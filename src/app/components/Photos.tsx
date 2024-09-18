import Image from 'next/image';
import EventssHoverAnimation from '@/app/components/EventsHoverAnimation';

export default function Photos() {
  return (
    <section>
      <EventssHoverAnimation />
      <h1 className="font-garamond my-12 md:my-16 italic w-3/5 md:w-2/5 text-3xl md:text-7xl mx-auto float-none md:float-right md:mr-10">
        for the love of loud music, beautiful people & good eats
      </h1>
      <br className="clear-right" />
      <div className="flex-col md:flex-row relative">
        <div className="relative z-20 mb-7 left-8 w-fit border-y-[25px] border-x-[10px] origin-center -rotate-6">
          <Image
            src="/polaroid1.jpg"
            alt="polaroid1"
            width={150}
            height={150}
            className="w-[200px] h-[200px] object-cover"
          />
          <Image
            src="/cross-tape.png"
            alt="cross-tape"
            width={150}
            height={150}
            className="w-[150px] h-[100px] absolute top-1/3 -right-28"
          />
        </div>
        <div className="relative z-20 -right-1/2 md:-right-1/3 md:-top-14 mb-20 md:mb-0 w-fit border-y-[25px] border-x-[10px] origin-center rotate-12">
          <Image
            src="/polaroid2.jpg"
            alt="polaroid2"
            width={150}
            height={150}
            className="w-[200px] h-[200px] object-cover"
          />
          <Image
            src="/tape2.png"
            alt="tape"
            width={150}
            height={150}
            className="w-[150px] h-[100px] absolute -bottom-5 -left-20 origin-center rotate-45"
          />
        </div>
        <div className="relative z-20 -right-6 md:-right-3/4 md:-top-[400px] w-fit border-y-[20px] border-x-[30px] origin-center -rotate-6">
          <Image
            src="/polaroid3.jpg"
            alt="polaroid3"
            width={150}
            height={150}
            className="w-[200px] h-[200px] object-cover"
          />
          <Image
            src="/tape3.png"
            alt="tape"
            width={150}
            height={150}
            className="w-[150px] h-[100px] absolute -top-1/2 inset-x-0 mx-auto origin-center rotate-90"
          />
        </div>
        <Image
          src="/crown-icon.png"
          alt="crown-icon"
          width={150}
          height={150}
          className="absolute bottom-1/2 left-1 md:left-56 w-[150px] h-[150px] object-cover -rotate-12"
        />
        <div className="font-serif text-black/70 w-fit uppercase absolute z-0 top-1/4 right-4 md:top-32 md:inset-x-0 md:mx-auto text-xl">
          <h1 className="mb-3">WE LIKE TO ENTERTAIN</h1>
          <h1 className="ml-8 mb-3">PRETTY GIRLS Luv SME</h1>
          <h1 className="ml-16">SENIORMEN for a reason</h1>
        </div>
        <Image
          src="/stroke1.png"
          alt="stroke"
          width={300}
          height={300}
          className="absolute z-30 bottom-20 -right-12 md:bottom-[40%] md:left-[45%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] object-contain opacity-70 md:opacity-80"
        />
      </div>
    </section>
  );
}
