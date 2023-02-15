import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import { ExtraProjectsType } from "@/data";

interface ProjectCardType {
  project: ExtraProjectsType;
}

const ProjectCard: FC<ProjectCardType> = ({ project }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex justify-between items-center">
        <div className="text-4xl text-blue-500">
          <FiFolder />
        </div>
        <div className="flex gap-4 items-center">
          <a
            href={project.githubLink}
            className="text-2xl text-gray-400 transition-all duration-300 hover:text-blue-500"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href={project.liveLink}
            className="text-2xl text-gray-400 transition-all duration-300 hover:text-blue-500"
            rel="noopener noreferrer"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>

      <div>
        <a href={project.liveLink} rel="noopener noreferrer">
          <h2 className="my-4 text-2xl text-gray-400 font-bold transition-all duration-300 hover:text-blue-500">
            {project.title}
          </h2>
        </a>
        <p className="text-sm md:text-base text-gray-400">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-gray-400">
          {project.technologies.map((tech) => (
            <li key={uuidv4()}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
