import { FC } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ProjectsType } from "@/data/projects";

interface ProjectItemProps {
  project: ProjectsType;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <div
      className={`flex items-center justify-center md:justify-between my-20 md:my-10 rounded-md bg-gray-800 flex-col md:flex-row  ${
        project.flipped && "md:flex-row-reverse"
      }`}
    >
      <div className="">
        <Image
          className={`rounded-md md:w-[600px] max-w-[90%] shadow-lg -mt-10 md:-mt-0 mx-auto ${
            project.flipped ? "md:ml-24" : "md:-ml-10"
          }`}
          src={project.image}
          alt={project.title}
          width={1280}
          height={800}
        />
      </div>

      <div
        className={`max-w-[450px] py-8 px-6 md:px-0 ${
          project.flipped ? "md:pl-10 md:text-right" : "md:pr-10"
        }`}
      >
        <p className="text-sm lg:text-base text-blue-500">Featured Project</p>
        <h2 className="text-2xl font-bold my-2">{project.title}</h2>
        <p className="text-base lg:text-lg text-gray-400">
          {project.description}
        </p>
        <ul
          className={`flex items-center gap-4 flex-wrap my-4 ${
            project.flipped ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.technologies.map((tech) => (
            <li key={uuidv4()} className="px-3 py-1 rounded-md bg-blue-600">
              {tech}
            </li>
          ))}
        </ul>

        <div
          className={`links flex gap-6 mt-6 ${
            project.flipped ? "md:justify-end" : "md:justify-start"
          }`}
        >
          <a
            href={project.githubLink}
            className="text-2xl block transition-all duration-300 text-gray-400 hover:text-blue-500"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiGithub />
          </a>
          <a
            href={project.liveLink}
            className="text-2xl block transition-all duration-300 text-gray-400 hover:text-blue-500"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
