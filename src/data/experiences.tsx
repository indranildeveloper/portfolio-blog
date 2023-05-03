import { v4 as uuidv4 } from "uuid";

export interface ExperienceType {
  id: string;
  title: string;
  date: string;
  company: string;
  description: string;
  tasks: Array<string>;
}

export const experiences: Array<ExperienceType> = [
  {
    id: uuidv4(),
    title: "Frontend Developer",
    date: "06/2022 - Present",
    company: "Private AI",
    description:
      "Detect, Anonymize, & Replace Personally Identifiable Information With Better Accuracy Than Big Tech.",
    tasks: [
      "I am currently working as a Frontend Developer and worked on several projects and tasks from building frontend applications and maintaining the website to deploying web applications to Cloud.",
      "Created the Web Demo from scratch which calls a custom backend API and displaying the data in different formats in the documentation.",
      "Created complete CI/CD pipeline with GitHub Actions and Deployed the Web Demo in Production.",
      "Created the Customer Portal from Scratch with React and Typescript.",
    ],
  },
  {
    id: uuidv4(),
    title: "Full Stack Developer",
    date: "10/2021 - Present",
    company: "Coder's Gyan",
    description: "Learn Programming by Building the stuff.",
    tasks: [
      "Building the full stack web application for Coder's Gyan Youtube Channel.",
      "Helping in building new projects and find new project ideas.",
      "Updating the old code and fix bugs in the existing codebase of projects.",
    ],
  },
];
