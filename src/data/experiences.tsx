import { v4 as uuidv4 } from "uuid";

interface ExperienceType {
  id: string;
  title: string;
  description: Array<string>;
}

export const experiences: Array<ExperienceType> = [
  {
    id: uuidv4(),
    title: "Private AI",
    description: ["private", "ai"],
  },
];
