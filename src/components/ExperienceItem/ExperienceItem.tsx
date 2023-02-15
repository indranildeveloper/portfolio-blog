import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaArrowRight } from "react-icons/fa";
import { ExperienceType } from "@/data";

interface ExperienceItemProps {
  experience: ExperienceType;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="text-gray-400 mb-10">
      <h1 className="text-2xl font-bold">{experience.title}</h1>
      <h4 className="text-xl text-blue-500">{experience.company}</h4>
      <p className="text-lg">{experience.date}</p>
      <p>{experience.description}</p>
      <ul>
        {experience.tasks.map((task) => (
          <li key={uuidv4()} className="flex items-center gap-2 my-4">
            <FaArrowRight size={16} className="text-blue-500" />{" "}
            <p className="flex-1">{task}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
