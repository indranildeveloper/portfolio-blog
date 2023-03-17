import { FC } from "react";
import { Heading } from "@/components/Heading";
import { skillItems } from "@/data";

const Skills: FC = () => {
  return (
    <div id="skills" className="my-10 pt-20">
      <div className="md:px-24 xl:px-0">
        <Heading>My Skills</Heading>
        <p className="mt-8 text-gray-400 text-base md:text-lg">
          Here are the technologies I have worked with:
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 md:gap-8">
          {skillItems.map((skillItem) => (
            <div
              key={skillItem.id}
              className="border-2 p-4 flex items-center justify-center text-4xl rounded-md transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
            >
              {skillItem.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
