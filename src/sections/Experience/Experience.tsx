import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Heading } from "@/components/Heading";
import { ExperienceItem } from "@/components/ExperienceItem";
import { experiences } from "@/data";

const Experience: FC = () => {
  return (
    <section id="experience" className="mt-10 pt-10">
      <div className="md:px-24 xl:px-0">
        <Heading>My Experience</Heading>
        <div className="mt-10">
          {experiences.map((experience) => (
            <ExperienceItem key={uuidv4()} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
