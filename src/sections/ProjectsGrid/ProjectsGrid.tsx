import { FC } from "react";
import { Heading } from "@/components/Heading";
import { ProjectCard } from "@/components/ProjectCard";

const ProjectsGrid: FC = () => {
  return (
    <section id="all-projects" className="mt-10 pt-20">
      <Heading>Other Noteworthy Projects</Heading>
      <p className="my-8 text-gray-400 text-base md:text-lg">
        Here are some other projects which I have worked on
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectsGrid;
