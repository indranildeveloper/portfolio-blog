import { v4 as uuidv4 } from "uuid";

interface NavLinksType {
  id: string;
  title: string;
  link: string;
}

export const navLinks: Array<NavLinksType> = [
  {
    id: uuidv4(),
    title: "about",
    link: "#about",
  },
  {
    id: uuidv4(),
    title: "experience",
    link: "#experience",
  },
  {
    id: uuidv4(),
    title: "skills",
    link: "#skills",
  },
  {
    id: uuidv4(),
    title: "projects",
    link: "#projects",
  },
  {
    id: uuidv4(),
    title: "contact",
    link: "#contact",
  },
];
