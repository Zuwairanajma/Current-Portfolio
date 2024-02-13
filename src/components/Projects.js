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

function Projects() {
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState(null);

  const handleClick = (crd) => {
    setCard(crd);
    setOpen(true);
  };

  const handleClose = () => {
    console.log('Closing modal');
    setOpen(false);
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
    <div className=" project-container h-80vh p-6 w-full z-0 shadow-[0_60px_50px_-40px_rgba(0,128,128,0.3)] flex flex-col items-center justify-center overflow-hidden">
      {!open && (
        <h2 className="mt-8 pt-8 text-4xl text-center text-yellow-400 underline-offset-4 my-5 font-agbalumo font-bold ">
          My Work
        </h2>
      )}
      {!open && (
        <div className="w-full h-70vh flex justify-center items-center align-center">
          <Swiper
            id="projects"
            className="w-full h-80% p-6 flex justify-center items-center"
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
                className="mt-n12 h-60vh w-80vw flex items-center justify-center border-slate-200"
              >
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick
        contentLabel="Project Details"
        ariaHideApp={false}
        overlayClassName="fixed inset-0 flex justify-center items-center bg-black opacity-50 backdrop-filter backdrop-blur-lg"
        className="modal-content mt-12"
        contentClassName="flex flex-col items-center justify-center w-3/4 max-w-screen-md h-4/4 mt-16"
      >
        <div className="bg-slate-200 bg-opacity-25 text-purple-500 w-full h-full flex flex-col items-center justify-center border-primary rounded-xl relative">
          <div className="w-full bg-primary p-5 rounded-xl">
            <div className="w-full flex justify-end items-end absolute top-0 right-0 z-100">
              <FontAwesomeIcon
                icon={faClose}
                onClick={handleClose}
                className="text-purple-500 h-6 w-6 mb-1 cursor-pointer mt-8 mr-4 sm:mt-2"
                style={{ zIndex: 99999 }}
              />
            </div>
            {card && (
            <>
              <img
                src={card.imageURL}
                alt={card.name}
                className="w-full object-contain p-4 h-96 md:h-80 lg:h-95.9 xl:h-120"
              />
              <span className="text-lg font-bold mt-2">{card.name}</span>
              <p className="text-sm mt-1 w-full max-w-lg">{card.description}</p>
              <div className="w-full flex flex-wrap gap-2 mt-3">
                {card.tech.map((element) => (
                  <div
                    className="py-1 px-2 box-border rounded border bg-purple-500 text-white hover:bg-primary hover:text-purple-500 hover:cursor-pointer"
                    key={element.id}
                  >
                    <span>{element.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </>
            )}
          </div>
        </div>
      </Modal>

    </div>
  );
}

export default Projects;
