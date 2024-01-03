import Reveal from '@/components/Reveal';
import { useState } from 'react';

export default function SuscribeForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    validateEmail();

    if (!emailError) {
      // Proceed with form submission logic
      const myForm = event.target as HTMLFormElement;
      const formData = new FormData(myForm);

      const urlSearchParams = new URLSearchParams(formData as any);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlSearchParams.toString(),
      })
        .then(() => alert('Successfully submitted!'))
        .catch((error) => alert(error));
    }
  };

  return (
    <>
      <section className="h-screen w-screen flex items-center justify-center">
        <Reveal>
          <div className="container p-5 md:max-w-xl lg:max-w-3xl flex flex-col justify-center text-left">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-wide font-serif">
              Parties, Merch & More...
            </h1>
            <h3 className="font-inter md:text-lg lg:text-xl text-gray-500 mt-2">
              Be the first to know when we launch!
            </h3>
            <form
              data-netlify="true"
              name="newsletter"
              method="POST"
              netlify-honeypot="bot-field"
              className="mt-10 md:mt-20 text-sm md:text-base h-10 md:h-14 flex flex-row items-center font-inter"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                className="p-2 h-full mr-1 w-[250px] md:w-4/5 border border-gray-500 rounded-md"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="p-2 h-full w-[100px] md:w-1/5 bg-black text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out delay-75 whitespace-nowrap"
              >
                Update Me!
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}
