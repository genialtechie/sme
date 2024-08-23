'use client';

import React, { useEffect, useState } from 'react';

export const VideoComponent = ({ className }: { className?: string }) => {
  const [dimensions, setDimensions] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 w-screen h-screen contrast-50 saturate-50 ${className}`}
    >
      <video
        src="https://res.cloudinary.com/dpti4rlt1/video/upload/f_auto:video,q_auto/v1/sme/sk7brbbgl7daok4a32ul"
        width={dimensions.width}
        height={dimensions.height}
        autoPlay
        controls={false}
        loop
        muted
        playsInline
        className="object-cover object-center w-full h-full" // Ensure the video covers the full area
      />
    </div>
  );
};
