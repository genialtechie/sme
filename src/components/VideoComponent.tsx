import React from 'react';

export const VideoComponent = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <div className="contrast-50 saturate-50">
      {isMobile ? (
        <video
          src="https://res.cloudinary.com/dpti4rlt1/video/upload/f_auto:video,q_auto/v1/sme/sk7brbbgl7daok4a32ul"
          width={window?.innerWidth}
          height={window?.innerHeight}
          autoPlay
          controls={false}
          loop
          muted
          playsInline
          className="object-cover object-center h-screen w-screen"
        ></video>
      ) : (
        <video
          src="https://res.cloudinary.com/dpti4rlt1/video/upload/f_auto:video,q_auto/v1/sme/sk7brbbgl7daok4a32ulconst isMobile = typeof window !== 'undefined' && window.innerWidth < 768;const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;"
          width={window?.innerWidth}
          height={window?.innerHeight}
          autoPlay
          controls={false}
          loop
          muted
          playsInline
          className="object-cover object-center h-screen w-screen"
        ></video>
      )}
    </div>
  );
};
