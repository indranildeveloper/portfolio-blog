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
      className={`flex justify-between items-center flex-col-reverse ${
        project.flipped ? "lg:flex-row" : "lg:flex-row-reverse"
      }  gap-8 p-8 rounded-md bg-gray-800 mb-8 shadow-xl`}
    >
      <div className={`text-left ${project.flipped && "lg:text-right"} flex-1`}>
        <p className="text-sm lg:text-base text-blue-500">Featured Project</p>
        <h2 className="text-2xl font-bold my-2">{project.title}</h2>
        <p className="text-base lg:text-lg text-gray-400">
          {project.description}
        </p>
        <ul
          className={`flex items-center gap-4 flex-wrap my-4 justify-start ${
            project.flipped && "lg:justify-end"
          }`}
        >
          {project.technologies.map((tech) => (
            <li key={uuidv4()} className="px-3 py-1 rounded-md bg-blue-600">
              {tech}
            </li>
          ))}
        </ul>

        <div
          className={`links flex gap-6 mt-6 justify-start ${
            project.flipped && "lg:justify-end"
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

      <div className="flex-1">
        <Image
          className="rounded-md"
          src={project.image}
          alt={project.title}
          width={1280}
          height={800}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
