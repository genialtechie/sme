import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <>
      <div className="absolute z-40 top-5 inset-x-0 mx-auto w-fit h-fit">
        <svg
          width="66"
          height="28"
          viewBox="0 0 66 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-125 md:scale-150 lg:scale-200"
        >
          <motion.path
            d="M19.6253 5.60321C19.6548 5.26146 19.478 4.61331 17.4805 3.51145C15.1649 2.23871 11.8122 0.388533 7.68166 1.56699C6.40304 1.93231 3.58652 2.73956 2.16648 5.52661C1.17658 7.47696 1.08231 9.98118 2.1547 11.9963C3.67491 14.8482 6.9746 15.6672 7.41062 15.7674C8.40053 15.9972 9.09582 15.9383 10.3921 16.4804C11.4468 16.9223 12.6901 17.4408 13.0201 18.6016C13.2793 19.5326 12.914 20.7405 12.201 21.094C11.9241 21.2296 11.6059 21.2296 10.9578 21.2237C10.3332 21.2237 9.85592 21.1353 9.72629 21.1117C7.7347 20.7464 7.29867 20.2102 6.09665 20.2161C4.88283 20.222 3.96952 20.7817 3.57474 21.0233C2.9148 21.4299 2.11934 21.9131 1.98382 22.5966C1.73045 23.8988 3.95774 25.4661 5.48384 26.185C8.4182 27.5638 13.2263 27.8761 16.6203 24.8297C17.3273 24.1934 19.6371 22.2136 19.6902 19.0435C19.7255 17.046 18.8593 14.8129 17.1977 13.5873C16.8206 13.3103 15.6598 12.945 13.3383 12.2261C11.6059 11.684 10.1977 11.3069 8.71871 10.1579C7.74059 9.39195 7.66399 9.06198 7.66989 8.86754C7.70524 7.94245 9.58488 6.81702 11.3113 7.01147C13.3147 7.23538 14.2575 9.14447 15.7541 8.67309C15.8661 8.63774 16.0841 8.49632 16.5201 8.2076C18.5588 6.85827 19.5782 6.17476 19.6194 5.61499L19.6253 5.60321Z"
            stroke="white"
            strokeMiterlimit="10"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0.3 }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: 1,
              repeatType: 'reverse',
            }}
          />
          <motion.path
            d="M21.4166 1.47862C21.1514 1.7202 21.2693 2.24461 21.287 2.333C21.4343 3.13435 21.4637 12.7388 21.4284 27.0099L26.8139 27.0924C27.0909 19.5149 27.0202 16.3684 26.808 15.4964C26.7962 15.461 26.7668 15.3432 26.808 15.3196C26.808 15.3196 27.0437 15.1782 33.6195 25.0713C35.9588 21.5065 38.298 17.9476 40.6372 14.3827C40.6962 18.578 40.7551 22.7792 40.814 26.9745C42.4167 26.9981 44.0135 27.0276 45.6162 27.0511C45.7635 27.0099 46.0817 26.8921 46.3233 26.5857C46.7122 26.1261 46.5649 25.4249 46.5531 25.3719C46.5119 25.201 46.4529 25.0772 46.447 25.0654C45.8107 23.7279 47.0363 4.88436 46.3115 2.51566C46.2997 2.46852 46.2526 2.333 46.3115 2.27997C46.8006 1.82626 53.0817 7.69498 53.0817 7.69498C53.0817 7.69498 54.5253 7.26484 54.8435 7.17646C56.0809 6.82881 57.006 6.88773 58.7089 6.84059C62.0557 6.75221 65.0961 6.33976 65.0961 6.33976L65.2906 1.47862C45.7517 1.93822 44.5556 1.50808 44.5556 1.50808C44.4024 1.45505 43.8073 1.21936 43.2063 1.44327C42.3578 1.76145 42.0278 2.7926 41.91 3.13435C41.851 3.29933 40.6903 4.93739 38.3746 8.2135C35.9823 11.5898 33.4251 14.4593 33.4251 14.4593C33.4251 14.4593 24.9873 4.23032 24.0504 2.4096C24.0092 2.32711 23.856 2.02071 23.526 1.76145C23.0193 1.36666 22.4183 1.35487 22.0058 1.34309C21.5816 1.3372 21.4755 1.40791 21.4225 1.45504L21.4166 1.47862Z"
            stroke="white"
            strokeMiterlimit="10"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0.3 }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: 1,
              repeatType: 'reverse',
            }}
          />
          <motion.path
            d="M47.9614 12.0788C47.9614 12.0788 47.5784 23.5865 47.7257 25.5486C47.7375 25.7136 47.7728 26.0789 48.0144 26.4265C48.0144 26.4265 48.3326 26.9451 49.0632 27.1336C51.32 27.7229 64.5423 27.2397 64.7603 27.2043C64.8133 25.7489 64.9547 22.0604 64.9547 22.0309V21.9307C61.2249 21.8541 57.4951 21.7834 53.7712 21.7068C53.7712 21.5183 53.7947 16.7337 53.7947 16.7278C53.7947 16.7219 53.7888 16.6984 53.7947 16.6689C53.8595 16.445 54.6668 16.4863 54.9084 16.498C57.0355 16.5982 59.1685 16.3743 61.2897 16.4686C61.3192 14.9484 61.3604 12.3617 61.3604 12.3027C61.3604 12.2968 61.3604 12.0729 61.3604 12.067C61.3604 12.0317 61.3604 12.014 61.3604 12.014L47.9496 12.0729L47.9614 12.0788Z"
            stroke="white"
            strokeMiterlimit="10"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0.3 }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: 1,
              repeatType: 'reverse',
            }}
          />
        </svg>
      </div>
    </>
  );
}
