import { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from './cards/ProjectCard';
import { projects } from '../constants';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import './projects.css';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState(null);

  const handleClick = (crd) => {
    setCard(crd);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    return true;
  };

  const responsive = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    },
  };
  return (
    <div className="w-full h-full z-0 gap -2 shadow-[0_60px_50px_-40px_rgba(0,128,128,0.3)] ">

      <div className="w-full h-full">
        <h2 className="mt-10 pt-10 text-4xl text-center text-yellow-400 underline-offset-4 my-5 font-agbalumo font-bold ">
          My Work
        </h2>
        <div className="w-full h-max flex gap-5 flex-wrap  items-center justify-center">
          <Swiper
            id="projects"
            className="w-full p-6 h-fit flex justify-center items-center"
            modules={[Navigation, EffectCoverflow, Pagination]}
            navigation
            loop
            centerInsufficientSlides
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            effect="coverflow"
            breakpoints={responsive.breakpoints}
          >
            {projects.map((project) => (
              <SwiperSlide
                onClick={() => handleClick(project)}
                key={project.id}
                className="h-max w-max flex items-center justify-center border-slate-200 "
              >
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick
        overlayClassName="Overlay"
        className="ModalContent mt-12"
        contentClassName="flex flex-col items-center justify-center w-3/4 max-w-screen-md h-4/4 mt-16"
        contentElement={() => (
          <div className="bg-slate-200 bg-opacity-25 text-purple-500 w-full h-full flex flex-col items-center justify-center border-primary rounded-xl relative">
            <div className="w-full md:w-3/4 bg-primary p-5 rounded-xl">
              <div className="w-full flex justify-end items-end z-100">
                <FontAwesomeIcon
                  icon={faClose}
                  onClick={handleClose}
                  className="text-purple-500 h-6 w-6 mb-1 cursor-pointer mt-10 mr-2 sm:mt-6"
                  style={{ zIndex: 99999 }}
                />
              </div>
              <img
                src={card.imageURL}
                alt={card.name}
                className="w-full object-contain p-4 h-96 md:h-80 lg:h-95.9 xl:h-120"
              />
              <span className="text-lg font-bold mt-2">{card.name}</span>
              <p className="text-sm mt-1 w-full max-w-lg">{card.description}</p>
              <div className="w-full flex max-sm:grid max-sm:grid-cols-2 gap-3 mt-5">
                {card.tech.map((element) => (
                  <div
                    className="py-1 px-2 box-border rounded border bg-purple-500 text-white w-full hover:bg-primary hover:text-purple-500 hover:cursor-pointer flex items-center justify-center"
                    key={element.id}
                  >
                    <span className="w-max h-max  text-center">
                      {element.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Projects;
