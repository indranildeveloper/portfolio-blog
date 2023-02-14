import { v4 as uuidv4 } from "uuid";

export interface ProjectsType {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  githubLink: string;
  liveLink?: string;
  image: string;
  technologies: Array<string>;
  flipped?: boolean;
}

export const projects = [
  {
    id: uuidv4(),
    title: "ProShop E-Commerce Web App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    featured: true,
    githubLink: "https://github.com/indranildeveloper/proshop",
    liveLink: "https://proshop-mern-2fuo.onrender.com/",
    image: "/projects/proshop.png",
    technologies: [
      "React",
      "Redux",
      "NodeJS",
      "Express",
      "MongoDB",
      "Bootstrap",
      "React Bootstrap",
    ],
    flipped: false,
  },
  {
    id: uuidv4(),
    title: "DevConnector Social Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    featured: true,
    githubLink: "https://github.com/indranildeveloper/devconnector",
    liveLink: "https://devconnector-9jlm.onrender.com/",
    image: "/projects/devconnector.png",
    technologies: ["React", "Redux", "NodeJS", "Express", "MongoDB", "Sass"],
    flipped: true,
  },
  {
    id: uuidv4(),
    title: "DJ Events",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    featured: true,
    githubLink: "https://github.com/indranildeveloper/dj-events-frontend",
    liveLink: "https://indranildevdjeventsfrontend.vercel.app/",
    image: "/projects/djevents.png",
    technologies: [
      "NextJS",
      "Strapi CMS",
      "Cloudinary",
      "PostgreSQL",
      "TailwindCSS",
      "React Mapbox",
    ],
    flipped: false,
  },
  {
    id: uuidv4(),
    title: "JBook App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    featured: true,
    githubLink: "https://github.com/indranildeveloper/jbook",
    liveLink: "https://jbook-indranildeveloper.vercel.app/",
    image: "/projects/jbook.png",
    technologies: ["React", "TypeScript", "BulmaCSS", "ESBuild"],
    flipped: true,
  },
];
