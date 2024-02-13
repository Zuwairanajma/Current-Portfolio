import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Software Engineer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-[80vh] p-4 mb-8 flex-col border-secondary shadow-[0_60px_50px_-40px_rgba(0,128,128,0.3)]">

      <div className="text-yellow-400 p-5 flex flex-col items-center font-agbalumo space-y-0 px-4">

        <div className="mt-24 h-fit">
          {/* <div className="h-fit w-full mt-16"> */}
          <p className="text-3xl md:text-4xl max-sm:text-3xl w-fit font-bold">
            Hi! my name is Zuwaira Sadiq,
            I am a
            {' '}
            <br />
            {' '}
            <span ref={el} />
          </p>
        </div>
        <p className="w-full py-5 text-xl  text-justify text-neutral-50 grow font-texturina ">
          I can help you build a product, feature or website. Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don&apos;t hesitate to contact me.
        </p>
      </div>
      <div className="mt-8 w-full flex justify-center">
        <button type="button" className=" mt-10 transition-all my-3  w-full h-12 md:h-16 text-neutral-50 bg-purple-500 hover:bg-yellow-400 hover:text-neutral-50 font-lobster text-2xl">
          <a
            href="https://drive.google.com/file/d/1iaZOPcrNCiF0uJmYQSgFG6ChmbJTdYH3/view?usp=sharing"
            target="blank"
          >
            Get my resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
