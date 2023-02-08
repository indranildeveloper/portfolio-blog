import { FC } from "react";
import { Heading } from "@/components/Heading";
import { ProjectItem } from "@/components/ProjectItem";

const Projects: FC = () => {
  return (
    <section id="projects" className="mt-10 pt-20">
      <Heading>Things I have built</Heading>
      <p className="mt-8 text-gray-400 text-base md:text-lg">
        Here are some of the Projects I have worked on
      </p>
      <div className="mt-10">
        <ProjectItem />
        <ProjectItem right />
        <ProjectItem />
        <ProjectItem right />
      </div>
    </section>
  );
};

export default Projects;
