import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ScaleLoader } from 'react-spinners';
import Socials from './Socials';
import ErrModal from './ErrModal';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_e39cnc7',
        'template_m03texa',
        form.current,
        '2fovmvlpXD4Je0wu9',
      )
      .then(
        (result) => {
          setLoading(false);
          return result.text;
        },
        (error) => {
          setError(true);
          setLoading(false);
          return error.text;
        },
      );
  };

  const handleError = () => {
    setError(false);
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div
        id="contact"
        className="flex gap-4 max-sm:gap-2 justify-around max-sm:justify-start items-center max-sm:w-full md:w-2/3 rounded p-10 max-sm:p-3 mt-20 sm:mt-10"
      >
        <Socials flex="flex-col" />
        <form
          ref={form}
          onSubmit={sendEmail}
          method="post"
          className="flex flex-col gap-3 w-11/12 md:w-2/3" // Reduced gap size here
        >
          <span className="text-4xl text-yellow-400 font-agbalumo font-bold">Contact Me</span>
          <input
            type="text"
            name="user_name"
            required
            placeholder="Name"
            className="p-3 text-dimBlue font-mono border border-secondary rounded"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Email"
            className="p-3 text-dimBlue font-mono border border-secondary rounded"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            className="p-3 text-dimBlue font-mono border border-secondary rounded"
            rows="4"
          />
          <button
            type="submit"
            className="bg-purple-500 text-neutral-50 p-4 font-lobster text-3xl hover:bg-yellow-400 hover:text-neutral-50 rounded"
          >
            {loading ? <ScaleLoader /> : 'Send'}
          </button>
        </form>
        <ErrModal disp={error} close={handleError} />
      </div>
    </div>
  );
}

export default Contact;
