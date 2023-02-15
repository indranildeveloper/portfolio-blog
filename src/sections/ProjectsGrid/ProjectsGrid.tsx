import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Heading } from "@/components/Heading";
import { ProjectCard } from "@/components/ProjectCard";
import { extraProjects } from "@/data";

const ProjectsGrid: FC = () => {
  return (
    <section id="all-projects" className="mt-10 pt-20">
      <div className="md:px-24 xl:px-0">
        <Heading>Other Noteworthy Projects</Heading>
        <p className="my-8 text-gray-400 text-base md:text-lg">
          Here are some other projects which I have worked on
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {extraProjects.map((project) => (
            <ProjectCard key={uuidv4()} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
