import { skills } from '../constants';

function About() {
  return (
    <div className="mt-2 flex flex-col items-center justify-center w-full overflow-hidden gap-2 sm:gap-2">
      <div className="flex flex-col w-full max-w-4xl text-justify items-center justify-center  p-1 sm:p-3 pt-16 sm:pt-20 lg:p-10 lg:pt-24 rounded-lg shadow-[0_35px_35px_-20px_rgba(0,128,128,0.3)] overflow-y-auto gap-1 sm:gap-2">

        <div className="flex flex-col lg:flex-row w-full gap-0 lg:gap-5 sm:gap-2">
          <div className="w-full lg:w-1/2 mt-[-0.1rem]">
            <span className="text-yellow-400 text-3xl font-agbalumo font-bold">About Me</span>
            <p className="text-neutral-50 py-3 font-medium font-texturina text-sm md:text-base">
              Unlocking the potential of the digital realm through meticulous code craftsmanship! As a seasoned full-stack developer, I specialize in transforming visionary concepts into impeccably engineered software solutions. Armed with a versatile skill set encompassing HTML, CSS, JavaScript, React, Node.js, Python, Django, and MongoDB, I am dedicated to delivering high-performance applications that transcend expectations. Let&apos;s collaborate to elevate your digital aspirations and sculpt a technological landscape that resonates with excellence!
            </p>
          </div>

          <div className="w-full lg:w-1/2 mt-[-0.3rem]">
            <span className="text-yellow-400 text-3xl font-agbalumo font-bold">Skills</span>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-2 py-3">
              {skills.map((element) => (
                <div key={element.id} className="flex flex-col items-center">
                  <img src={element.icon} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                  <span className="text-neutral-50 mt-1 text-xs md:text-sm">{element.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="mt-0.5 sm:mt-3 transition-all my-3  w-full h-16 text-neutral-50 bg-purple-500 hover:bg-yellow-400 hover:text-neutral-50 rounded-full"
        >
          <a
            href="#contact"
            className=" w-38 h-18 px-6 py-4 rounded-full border-2 border-transparent font-lobster text-2xl text-center transition-all"
          >
            Contact Me
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
