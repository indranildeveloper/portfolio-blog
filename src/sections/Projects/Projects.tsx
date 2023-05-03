import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Heading } from "@/components/Heading";
import { ProjectItem } from "@/components/ProjectItem";
import { projects } from "@/data";

const Projects: FC = () => {
  return (
    <section id="projects" className="mt-10 pt-20">
      <div className="md:px-24 xl:px-0">
        <Heading>Things I have built</Heading>
        <p className="mt-8 text-gray-400 text-base md:text-lg">
          Here are some of the Projects I have worked on
        </p>
        <div className="mt-10">
          {projects.map((project) => (
            <ProjectItem key={uuidv4()} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
