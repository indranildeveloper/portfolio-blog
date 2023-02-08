import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiApollographql,
  SiMongodb,
  SiNextdotjs,
  SiGatsby,
  SiMicrosoftazure,
  SiRedux,
  SiEslint,
  SiPrettier,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiGraphql,
} from "react-icons/si";
import { Heading } from "@/components/Heading";

interface SkillItemType {
  id: string;
  icon: JSX.Element;
}

const skillItems: Array<SkillItemType> = [
  {
    id: uuidv4(),
    icon: <FaReact />,
  },
  {
    id: uuidv4(),
    icon: <FaNodeJs />,
  },
  {
    id: uuidv4(),
    icon: <FaGit />,
  },
  {
    id: uuidv4(),
    icon: <FaGithub />,
  },
  {
    id: uuidv4(),
    icon: <SiVisualstudiocode />,
  },
  {
    id: uuidv4(),
    icon: <SiApollographql />,
  },
  {
    id: uuidv4(),
    icon: <SiMongodb />,
  },
  {
    id: uuidv4(),
    icon: <SiNextdotjs />,
  },
  {
    id: uuidv4(),
    icon: <SiGatsby />,
  },
  {
    id: uuidv4(),
    icon: <SiMicrosoftazure />,
  },
  {
    id: uuidv4(),
    icon: <SiRedux />,
  },
  {
    id: uuidv4(),
    icon: <SiEslint />,
  },
  {
    id: uuidv4(),
    icon: <SiPrettier />,
  },
  {
    id: uuidv4(),
    icon: <SiJavascript />,
  },
  {
    id: uuidv4(),
    icon: <SiTypescript />,
  },
  {
    id: uuidv4(),
    icon: <SiHtml5 />,
  },
  {
    id: uuidv4(),
    icon: <SiCss3 />,
  },
  {
    id: uuidv4(),
    icon: <SiTailwindcss />,
  },
  {
    id: uuidv4(),
    icon: <SiBootstrap />,
  },
  {
    id: uuidv4(),
    icon: <SiFirebase />,
  },
  {
    id: uuidv4(),
    icon: <SiGraphql />,
  },
];

const Skills: FC = () => {
  return (
    <div id="skills" className="my-10 pt-20">
      <Heading>My Skills</Heading>
      <p className="mt-8 text-gray-400 text-base md:text-lg">
        Here are the technologies I have worked with:
      </p>

      <div className="mt-8 grid grid-cols-4 md:grid-cols-6 gap-8">
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
  );
};
export default Skills;
