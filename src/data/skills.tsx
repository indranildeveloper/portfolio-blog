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

interface SkillItemType {
  id: string;
  icon: JSX.Element;
}

export const skillItems: Array<SkillItemType> = [
  {
    id: uuidv4(),
    icon: <FaReact />,
  },
  {
    id: uuidv4(),
    icon: <SiRedux />,
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
    icon: <SiGraphql />,
  },
  {
    id: uuidv4(),
    icon: <SiApollographql />,
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
    icon: <SiVisualstudiocode />,
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
    icon: <SiHtml5 />,
  },
  {
    id: uuidv4(),
    icon: <SiCss3 />,
  },
  {
    id: uuidv4(),
    icon: <SiFirebase />,
  },
];
