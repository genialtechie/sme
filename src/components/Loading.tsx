'use client';

import { motion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import '@fontsource/monofett';

export default function Loading(): JSX.Element {
  const [loading, setLoading] = useState(true);
  // show loading screen for 3 seconds on first load
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <main className="loading fixed z-20 flex min-h-screen w-full flex-col items-center justify-center">
          <div className="scale-50 h-fit w-fit mb-5">
            <motion.svg
              height="75%"
              width="75%"
              className="mx-auto"
              color="#000000"
              id="a"
              animate={{ scale: [1, 1.1, 0.9, 1.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
                repeatDelay: 1,
              }}
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 509.14 296.98"
            >
              <defs>
                <style>
                  {`
                      .b {
                          fill: none;
                          opacity: 0;
                      }
      
                      .b, .c {
                          stroke: #000000;
                          stroke-miterlimit: 10;
                      }
      
                      .c {
                          fill: #000000;
                      }
                  `}
                </style>
              </defs>
              <path
                className="c"
                d="m247.84,37.8s.21-7.7.6-22.11c-1.2-1.15-3-3.28-2.99-5.98.02-5.52,7.61-10.39,13.15-8.96,2.89.75,4.71,3.08,5.47,4.07,2.62,3.37,2.94,7.32,2.78,7.38,0,0-.03,0-.48-.69,0,0-.62,1.79-1.21,3.06-.35.76-.91,1.78-1.77,2.92-.13,6.9-.26,13.8-.39,20.7,68.05.47,136.1.94,204.14,1.41,6.97,4.58,13.94,9.16,20.91,13.74,0,0-467.25,1.19-467.25,1.2,0,0-.1-.89,22.11-15.54,0,0,197.11-1.25,197.12-1.25,0,0,7.82.05,7.82.05Z"
              />
              <path
                className="c"
                d="m322.82,79.07c-2.95-3.21-5.9-6.43-8.84-9.64-.41-.44-.82-.86-1.47-1.27-2.22-1.39-5.34-1.31-5.34-1.31s-143.41,0-198.25-.06c0,0-6.14,0-6.82,0-24.83.1-49.65.11-74.47.03,0,0-4.79-.02-22.52-.1-2.16,0-3.95-.02-3.95-.02-.07,0-.14,0-.21,0-.1,19.9-.18,39.81-.24,59.72-.14,43.96-.21,87.91-.19,131.85,20.55.28,41.11.56,61.66.84,2.12.36,3.7,2.15,3.8,4.22.09,2-5.23,6.05-3.8,4.65-13.91.04-27.81.07-41.72.11-.17,2.73-.34,5.47-.51,8.2,33.33-.32,40.41.01,41.54.3.08.02.17.05.17.05.75.21,3.93,1.13,4.45,2.97.6,2.1-3.39,5.3-3.39,5.3-14.13.21-28.27.42-42.4.64-.07,3.32-.14,6.64-.21,9.96,0,0,200.32.42,200.34.42-4.81-5.09-9.61-10.18-14.42-15.26h-47.91c-2.54.03-7.15-.24-12.3-2.54-5.03-2.26-8.15-5.46-10.39-7.84-11.97-12.78-21.2-26.08-21.2-26.08,0,0-2.6-1.31-4.66-1.91-2.39-.7-9.1-.3-9.47-.21-1.22,0-4.44-.01-9.7-.03-21.45-.06-69.86-.19-69.86-.18V82.87c100.84,0,201.68,0,302.52,0,1.7.2,2.35,0,2.5-.33,0,0,.19-.44-2.71-3.47Zm-233.85,181.23c.06-.02.12-.03.18-.05.73-.56,1.52-.98,2.51-1.14.06-.02.12-.03.18-.05,1.47-.79,3.09-1.15,4.96-1.16.29,0,.56.03.82.08,1.13-.04,2.26-.03,3.46-.02,1.1,0,2.03.38,2.78.96,4.25,1.4,7.55,4.6,7.64,9.51.09,4.97-3.15,9.77-7.29,12.34-.93.58-2.18.81-3.34.63-2.34.82-4.75,1.09-6.79.31-1.12,0-2.27-.22-3.38-.64-8.41-3.2-11.25-17.18-1.74-20.77Z"
              />
              <motion.path
                className="c"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.5,
                  repeatDelay: 1,
                }}
                d="m119.49,205.41s-.03-.01-.04-.01c-.02,0-.04-.02-.04-.02h0s-2.82.38-2.95.4c-5.7.77-9.88,1.33-13.2,1.48-1.59.07-6.47.26-11.59-.96-7.9-1.88-13.11-6.31-16.21-9.05-4.06-3.58-12.58-10.99-14.9-22.8-3.11-15.81,5.68-30.86,16.34-39.06,14.2-10.93,30.55-8.82,35.89-7.81,3.42.65,24.25,4.57,32.7,23.81,7.74,17.61-7.17,43.76-7.45,44.25,0,0,0,0,0,0,7.53,7.74,12.36,12.71,12.36,12.71,0,0,7.13-9.26,8.72-11.44,8.58-11.78,9-27.88,9.03-29.72.34-21.5-16.73-42.18-36.57-51.48-21.45-10.05-47.33-7.35-65.88,6.51-3.76,2.81-20.98,15.68-23.6,38.33-2.68,23.17,11.21,45.44,28.35,54.72,23.69,12.83,60.19,4.41,61.79,4.03,0,0,.05-.01.05-.01t-12.83-13.88Z"
              />
              <path
                className="c"
                d="m47.1,229.19c2.52-1.06,4.96-3.75,4.63-7.09-.29-2.86-2.5-5.06-5.01-5.8-2.6-.77-5.27.1-6.97,1.75-2.36,2.28-3.29,6.46-1.08,9.33,2.05,2.67,5.81,2.92,8.44,1.82Z"
              />
              <path
                className="c"
                d="m86.84,157.47c2.8-5.39,8.46-6.56,9.52-6.78,5.19-1.07,12.64.43,15.54,6.29,2.59,5.25-.14,10.58-.34,10.97-3.83,7.19-13.15,6.8-13.81,6.76-1.59-.09-7.88-.46-10.94-5.68-3.09-5.28-.23-11.01.05-11.56Z"
              />
              <path
                className="c"
                d="m82.47,174.65c.11-.28.79-1.88,2.53-2.51,1.56-.56,3.6-.2,4.59,1.21,1.27,1.81.35,4.68-1.66,5.77-1.48.8-3.42.57-4.89-.61"
              />
              <path
                className="c"
                d="m42.57,95.78c2.95-.87,5.54.64,6.07.97.32.2,4.02,2.57,3.76,6.25-.24,3.47-3.84,5.79-6.89,6.2-2.98.41-7.01-.79-8.27-4.06-1.46-3.8,1.63-8.28,5.33-9.37Z"
              />
              <path
                className="c"
                d="m137.53,93.06s0,.02,0,.03c-.04,3.63-.09,7.25-.13,10.88,7.05,0,14.1,0,21.15,0-.01-3.61-.02-7.22-.04-10.82-.06,0-19.55-.08-19.55-.08h0s-1.44,0-1.44,0Z"
              />
              <path
                className="c"
                d="m176.5,103.83c.62-.11,1.26,0,1.87-.09.61-.1,5.18-.12,19.55.12-.02-2.5-.03-4.36-.04-5.63-.01-2.32-.01-4.58-.01-5.56,0,0,0-.07,0-.07,0,0,0,0,0,0,0,0-.02-.29-19.5.16l-2.38-.04c.19,10.91.16,11.01.16,11.01,0,.02-.01.06,0,.08.05.09.28.04.35.03Z"
              />
              <path
                className="c"
                d="m215.21,103.87s0,.04,0,.08c.12.29,1.14.12,1.27.1,2.15-.29,77.53-.09,77.53-.09h0s-.04-11.06-.04-11.06h0s-72.85-.02-75.4-.16c-.01,0-.3-.02-.68,0-1.11.04-1.97.08-2.39.59-.53.64-.26,1.96-.26,1.96h0l.06,5.96h0s-.04,2.04-.1,2.64Z"
              />
              <path
                className="c"
                d="m312.92,103.9c.65.02,1.68.04,2.93.06,7.44.12,12.98,0,14.31-.02,4.48-.08,15.02-.13,40.51-.02.03-7.18.05-11.03.05-11.03,0,0-57.73,0-57.74,0-.23,10.49-.06,11.01-.06,11.01Z"
              />
              <path
                className="c"
                d="m457.76,97.11c2.78-2.16,6.85-2.22,9.66-.16.3.22,3.41,2.57,3.13,6.12-.28,3.6-3.87,6.13-7.15,6.48-3.52.38-7.8-1.63-8.62-5.33-.65-2.92,1.13-5.67,2.98-7.11Z"
              />
              <path
                className="c"
                d="m366.2,66.75c.25-.55,1.24-.59,1.57-.61,3.5-.17,105.29.43,140.25.64.13,90.55.2,135.17.2,135.17,0,0-19.86-21.8-19.86-21.8,0,0,.42-96.83.42-96.83,0,0-34.17.04-102.51.13-.37,0-1.56,0-1.56,0-5.32-3.74-9.01-7.02-16.37-13.57-.79-.7-2.53-2.27-2.14-3.14Z"
              />
              <path
                className="c"
                d="m458.88,216.97c2.63-1.35,6.81-1.57,9.28,1.31,2.12,2.47,2.05,6.14.38,8.66-2.18,3.29-6.61,3.93-9.72,2.49-.32-.15-3.93-1.89-4.25-5.58-.29-3.28,2.21-5.79,4.31-6.87Z"
              />
              <path
                className="c"
                d="m386.32,153.12c5.45-4.82,12.5-2.73,13.31-2.48.8.25,7.93,2.63,9.25,9.12,1.23,6.05-3.34,12.04-8.72,14.11-6.51,2.51-15.23-.33-17.7-7.04-1.77-4.81.11-10.39,3.86-13.7Z"
              />
              <path
                className="c"
                d="m378.63,175.46c.06-2.09,2.59-3.54,4.66-3.57,2.23-.03,4.8,1.57,4.84,3.61.04,2.13-2.69,3.93-5.08,3.78-2.07-.13-4.47-1.74-4.42-3.82Z"
              />
              <motion.path
                className="c"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 1,
                  repeatDelay: 1,
                }}
                d="m357.6,157.21c-.6,3.67-3.02,20.76,8.08,34.87,13.05,16.59,36.9,19.01,53.78,11.84,3.09-1.31,18.8-7.98,24.17-25.02,4.86-15.41-1.18-31.53-11.22-41.21-18.38-17.72-45.91-9.74-49.71-7.1-.15.11-.54.39-1.14.54-5.29,1.35-13.25-11.24-13.25-11.25h0c.17-.05,20.35-9.29,37.41-9.34,19.23-.05,33.59,11.59,35.83,13.45,14.6,12.17,25.91,34.35,20.23,57.72-8.19,33.68-44.93,42.11-47.47,42.65-28.01,5.93-58.71-8.06-69.53-30.7-8.24-17.25-4.39-38.36-4.09-39.72.88-4,1.54-4.83,1.54-4.83.34-.44,1.19-1.37,1.25-2.52.01-.24.03-1.27.03-1.27h0s10.61,8.95,14.09,11.88Z"
              />
              <path
                className="c"
                d="m446.45,258.93c.39-.08,2.32-.41,2.32-.41,0,0,59.74.05,59.74.05,0,0,.12-27.65.12-27.65,0,0-.22-2.17-.83-3.8-.7-1.89-5-6.28-3.57-4.87,0,0-5.57-5.91-11.77-12.29-2.05-2.11-3.24-3.32-4-2.97-.95.44-.52,3.03-.19,5.77,0,0,.28,2.37.67,29.1,0,.1,0,.2,0,.2,0,.15,0,.18,0,.18,0,.35-79.88.3-87.82.46-.32,0-8.23.18-8.23.18-.94,1.25-15.23,20.2-22.5,29.25-.58.72-1.73,2.13-3.6,3.57-5.19,3.99-11.02,4.43-13.53,4.59-18.83,1.18-66.23.17-68.4.13-12.09-.25-20.53.68-24.24-.51-.16-.05-.71-.23-.88-.02-1.05,1.3,13.66,15.05,13.66,15.05,1.62.43,3.23.86,4.85,1.29,136.98.08,179.95.15,190.62.19.6,0,21.11.09,21.11.09.03-7.28.05-11.19.05-11.19,0,0-40.74.03-40.74.03l-5.49-.23c-.13-.05-2.98-1.27-3.13-3.59-.13-1.96,1.74-3.6,3.17-4.22,1.72-.74,4.22-.61,4.22-.61,0,0,42.64-.24,42.64-.24,0,0-.18-7.81-.18-7.81-.01,0-32.92-.37-39.27.03-.14,0-.98.06-2.11,0-2.04-.11-3.91-.21-5.48-1.29-1.11-.76-2.88-2.57-2.57-4.47.39-2.38,3.86-3.67,5.35-3.96Zm-22.75,11.75c-.42,5.63-4.63,9.94-9.89,11.55-5.6,1.71-12.57.09-15.82-5.07-1.6-2.54-2.12-6.11-1.52-9.36.06-.52.17-1.02.32-1.53.06-.25.15-.51.27-.76.48-1.22,1.2-2.46,2.07-3.83.69-1.1,1.58-1.77,2.52-2.13.05-.03.09-.06.14-.09,3.29-2.01,7.15-2.85,10.7-1.47.29.02.58.04.86.08.86.1,1.6.37,2.23.74,4.91,1.76,8.53,6.27,8.12,11.87Z"
              />
              <path
                className="b"
                d="m402.75,258.74c5.68-3.04,14.12-1.98,18.35,3.88,2.43,3.36,3.46,8.3,1.63,12.46-3.34,7.61-15.34,10.54-21.98,5.18-3.9-3.14-5.93-9.11-4.16-14.37,1.52-4.52,5.23-6.65,6.15-7.15Z"
              />
              <path
                className="c"
                d="m181.1,192.12c2.28.05,1.55,6.29,7.11,10.46,3.8,2.85,9.36,3.92,10.41,3.92,0,0,.09,0,3.57.31,33.47.15,66.95.29,100.42.44,2.05-.15,9.83-.96,15.83-7.38,0,0,.77-1.01,5.41-9.81,1.54,4.25,4.11,9.88,8.57,15.53,7.17,9.09,16.36,14.62,15.42,16.16,0,0,0,0,0,0-1.73.43-5.66-.02-5.66-.02-8.37,2.09-174.91-.16-174.92-.16h0s-9.83-.04-9.83-.04c-.37-.99,2.83-2.49,7.18-6.23.37-.32,5.05-4.37,8.68-9.5,5.53-7.79,5.59-13.72,7.81-13.67Z"
              />
              <path
                className="c"
                d="m181.1,149.77c2.28-.05,1.55-6.97,7.11-11.59,3.8-3.16,9.36-4.34,10.41-4.34,0,0,.09,0,3.57-.35,33.47-.16,66.95-.32,100.42-.48,2.05.17,9.83,1.06,15.83,8.18,0,0,.77,1.12,5.41,10.87,1.54-4.71,4.11-10.94,8.57-17.21,7.17-10.07,16.36-16.2,15.42-17.9,0,0,0,0,0,0-1.73-.48-5.66.03-5.66.03-8.37-2.32-174.91.18-174.92.18,0,0-9.83.05-9.83.05-.37,1.1,2.83,2.76,7.18,6.9.37.35,5.05,4.85,8.68,10.52,5.53,8.63,5.59,15.2,7.81,15.15Z"
              />
              <path
                className="c"
                d="m226.78,157.16c.05-.58-.25-1.68-3.64-3.55-3.93-2.16-9.62-5.3-16.63-3.3-2.17.62-6.95,1.99-9.36,6.72-1.68,3.31-1.84,7.56-.02,10.98,2.58,4.84,8.18,6.23,8.92,6.4,1.68.39,2.86.29,5.06,1.21,1.79.75,3.9,1.63,4.46,3.6.44,1.58-.18,3.63-1.39,4.23-.47.23-1.01.23-2.11.22-1.06,0-1.87-.15-2.09-.19-3.38-.62-4.12-1.53-6.16-1.52-2.06.01-3.61.96-4.28,1.37-1.12.69-2.47,1.51-2.7,2.67-.43,2.21,3.35,4.87,5.94,6.09,4.98,2.34,13.14,2.87,18.9-2.3,1.2-1.08,5.12-4.44,5.21-9.82.06-3.39-1.41-7.18-4.23-9.26-.64-.47-2.61-1.09-6.55-2.31-2.94-.92-5.33-1.56-7.84-3.51-1.66-1.3-1.79-1.86-1.78-2.19.06-1.57,3.25-3.48,6.18-3.15,3.4.38,5,3.62,7.54,2.82.19-.06.56-.3,1.3-.79,3.46-2.29,5.19-3.45,5.26-4.4Z"
              />
              <path
                className="c"
                d="m229.82,150.16c-.45.41-.25,1.3-.22,1.45.25,1.36.3,17.66.24,41.88l9.14.14c.47-12.86.35-18.2-.01-19.68-.02-.06-.07-.26,0-.3,0,0,.4-.24,11.56,16.55,3.97-6.05,7.94-12.09,11.91-18.14.1,7.12.2,14.25.3,21.37,2.72.04,5.43.09,8.15.13.25-.07.79-.27,1.2-.79.66-.78.41-1.97.39-2.06-.07-.29-.17-.5-.18-.52-1.08-2.27,1-34.25-.23-38.27-.02-.08-.1-.31,0-.4.83-.77,11.49,9.19,11.49,9.19,0,0,2.45-.73,2.99-.88,2.1-.59,3.67-.49,6.56-.57,5.68-.15,10.84-.85,10.84-.85,0,0,.33-8.25.33-8.25-33.16.78-35.19.05-35.19.05-.26-.09-1.27-.49-2.29-.11-1.44.54-2,2.29-2.2,2.87-.1.28-2.07,3.06-6,8.62-4.06,5.73-8.4,10.6-8.4,10.6,0,0-14.32-17.36-15.91-20.45-.07-.14-.33-.66-.89-1.1-.86-.67-1.88-.69-2.58-.71-.72-.01-.9.11-.99.19Z"
              />
              <path
                className="c"
                d="m274.87,168.15s-.65,19.53-.4,22.86c.02.28.08.9.49,1.49,0,0,.54.88,1.78,1.2,3.83,1,26.27.18,26.64.12.09-2.47.33-8.73.33-8.78,0,0,0-.17,0-.17-6.33-.13-12.66-.25-18.98-.38,0-.32.04-8.44.04-8.45,0-.01-.01-.05,0-.1.11-.38,1.48-.31,1.89-.29,3.61.17,7.23-.21,10.83-.05.05-2.58.12-6.97.12-7.07,0-.01,0-.39,0-.4,0-.06,0-.09,0-.09,0,0-22.76.1-22.76.1Z"
              />
              <path
                className="c"
                d="m273.88,239.96h0s-101.16-.2-101.16-.2h0s-6.06,2.5-7.96,6.69c-1.39,3.07-.7,7.33,1.64,9.86,2.09,2.27,5.17,2.78,7.44,3.16,2.12.35,5.52.5,5.52.5h0s116.06-.22,116.06-.22h0s-21.54-19.8-21.54-19.8Z"
              />
              <path
                className="c"
                d="m311.84,241.81c-1.06,2.12,7.74,5.7,12.43,14.71.43.82,1.18,2.37,2.87,3.38,3.9,2.32,9.17-.44,9.61-.68.94-.51,6-3.24,6.28-8.62.27-5.21-4.13-8.92-5.97-9.4-1.44-.37-2.85-.2-2.85-.2-.53.06-.91.17-.99.19-2.73.7-19.98-2.19-21.39.63Z"
              />
              <path
                className="b"
                d="m108.61,277.15c.29-.36,1.54-1.92,2.31-4.36.33-1.04,1.18-3.72.41-6.59-1.2-4.48-5.6-6.56-7.06-7.25-5.81-2.75-11.36-.77-12.11-.49-1.07.4-8.36,3.13-9.27,9.75-.71,5.2,3.02,9.07,3.66,9.74,5.15,5.35,12.74,3.98,13.85,3.76,1.4-.28,5.38-1.12,8.21-4.57Z"
              />
            </motion.svg>
          </div>
          <div className="p-1 h-8 w-[210px] border-black border-2 mb-2">
            <motion.div
              className="h-5 w-52 bg-black progress-bar"
              // simulate loading sequence 3 seconds long
              initial={{ width: '0%' }}
              animate={{ width: ['0%', '15%', '45%', '100%'] }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </div>
          <motion.text
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0, 1] }}
            transition={{ delay: 0.6, duration: 3 }}
            className="text-4xl mono"
          >
            Loading...
          </motion.text>
        </main>
      ) : (
        <></>
      )}
    </>
  );
}
