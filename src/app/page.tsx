import Image from 'next/image';
import Loading from '@/components/Loading';

export default function Home() {
  return (
    <>
      <Loading />
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
