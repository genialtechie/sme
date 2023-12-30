'use client';

import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Landing from '@/components/Landing';
import SuscribeForm from '@/components/SuscribeForm';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // show loading screen for 3 seconds on first load
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Loading loading={loading} />
      <Landing />
      <SuscribeForm />
    </>
  );
}
