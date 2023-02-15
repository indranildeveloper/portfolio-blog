import { FC } from "react";
import { ExperienceType } from "@/data";

interface ExperienceItemProps {
  experience: ExperienceType;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div>
      <h1>{experience.title}</h1>
    </div>
  );
};

export default ExperienceItem;
