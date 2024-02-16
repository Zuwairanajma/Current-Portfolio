import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (project) => {
  const prj = { ...project };

  return (
    <div className="h-62 max-h-63vh w-fit max-sm:w-full md:w-64 lg:w-full border text-primary p-3 flex flex-col justify-center items-center border border-3 border-purple-500 rounded hover:border-2 hover:border-purple transition-transform max-w-xs bg-primary sm:m-10 m-7 p-8">
      <div className="flex flex-col items-center justify-center gap-1 align-center">
        <img className="object-contain md:w-44 md:h-28 lg:w-48 lg:h-32 my-2" src={prj.project.imageURL} alt={prj.project.title} />
        <h3 className="text-lg md:text-base font-agbalumo text-yellow-400 underline underline-offset-2 text-center py-2 font-bold">
          {prj.project.name}
        </h3>
        <p className="mt-n10 text-sm md:text-xs lg:h-16 md:w-60 text-dimBlue text-justify font-texturina">{prj.project.description}</p>
        <div
          className="w-full flex flex-wrap py-1 gap-1 justify-center items-center font-bold"
        >
          {prj.project.tech.map((element) => (
            <div
              className={
                  'mt-3 py-0.5 px-1 box-border rounded bg-purple-500 text-xs text-primary hover:bg-yellow-400 hover:text-neutral-50 hover:cursor-pointer '
                  + `md: w-max grid grid-cols-${prj.project.tech.length}`
                }
              key={element}
            >
              <span className="text-xs w-max h-max text-center">
                {element.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full py-2 flex justify-between">
          <a href={prj.project.projectSrc} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5 hover:text-yellow-400 text-purple-500 transition-transform hover:-translate-y-0.5" />
          </a>
          <a href={prj.project.projectURL} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-5 w-5 hover:text-yellow-400 text-purple-500 transition-transform hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
