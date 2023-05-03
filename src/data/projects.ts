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
export interface ExtraProjectsType {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  technologies: Array<string>;
}

export const projects = [
  {
    id: uuidv4(),
    title: "ProShop E-Commerce Web App",
    description:
      "MERN Stack Fully functional E-Commerce Web Application with Custom Authentication, Product Buy Review and Sell Functionality.",
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
      "MERN Stack Social Media Application with Custom Authentication, Profile, Like, Comment functionality built for Developers.",
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
      "Full Stack Web Application for hosting, managing and attending Musical and DJ Events With Custom Authentication Integrated with Strapi.",
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
      "An Online Code editor with live Preview and markdown editor for documentation, it has access to every package which is listed on NPM Registry.",
    featured: true,
    githubLink: "https://github.com/indranildeveloper/jbook",
    liveLink: "https://jbook-indranildeveloper.vercel.app/",
    image: "/projects/jbook.png",
    technologies: ["React", "TypeScript", "BulmaCSS", "ESBuild"],
    flipped: true,
  },
  {
    id: uuidv4(),
    title: "Support Desk",
    description:
      "MERN Stack Web Application for Managing Issues for certain products in the company with Custom Authentication System.",
    featured: true,
    githubLink: "https://github.com/indranildeveloper/support-desk",
    liveLink: "https://support-desk-2h7k.onrender.com/",
    image: "/projects/supportdesk.png",
    technologies: [
      "React",
      "Redux",
      "NodeJS",
      "MongoDB",
      "Express",
      "Bootstrap",
      "React Bootstrap",
    ],
    flipped: false,
  },

  {
    id: uuidv4(),
    title: "DevSpace Blog",
    description:
      "Fully featured blog application with Markdown Support, Search Functionality and caching of search results in client.",
    featured: true,
    githubLink: "https://github.com/indranildeveloper/devspace",
    liveLink: "https://devspace-iota.vercel.app/",
    image: "/projects/devspace.png",
    technologies: ["React", "NextJS", "Markdown", "Tailwind CSS", "Husky"],
    flipped: true,
  },
];

export const extraProjects: Array<ExtraProjectsType> = [
  {
    id: uuidv4(),
    title: "Memories",
    description: "A Full Stack Social Media Application with image upload.",
    githubLink: "https://github.com/indranildeveloper/mern-memories-app",
    liveLink: "https://github.com/indranildeveloper/mern-memories-app",
    technologies: ["React", "Redux", "Material UI", "NodeJS", "MongoDB"],
  },
  {
    id: uuidv4(),
    title: "Codepen Clone",
    description: "Code Editor like Codepen with live preview.",
    githubLink: "https://github.com/indranildeveloper/react-codepen-clone",
    liveLink: "https://react-codepen-clone-indranildeveloper.netlify.app/",
    technologies: ["React", "CodeMirror"],
  },
  {
    id: uuidv4(),
    title: "Github Finder",
    description:
      "A web application to find and see the data from the github profile.",
    githubLink: "https://github.com/indranildeveloper/github-finder-app",
    liveLink: "https://github-finder-app-indranildeveloper.vercel.app/",
    technologies: ["React", "Context API", "Tailwind CSS", "Daisy UI"],
  },
  {
    id: uuidv4(),
    title: "Portfolio Website",
    description: "Portfolio website for developer.",
    githubLink: "https://github.com/indranildeveloper/next-portfolio",
    liveLink: "https://indranilhalder.vercel.app/",
    technologies: ["NextJS", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: uuidv4(),
    title: "Music Player",
    description: "A Simple Music Player App",
    githubLink: "https://github.com/indranildeveloper/js-music-player",
    liveLink: "https://jsmusicplayer-indranildeveloper.netlify.app/",
    technologies: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: uuidv4(),
    title: "Portfolio Website",
    description: "Portfolio website for developer with Strapi Backend.",
    githubLink: "https://github.com/indranildeveloper/gatsby-portfolio",
    liveLink: "https://gatsbyportfolio-indranildeveloper.netlify.app/",
    technologies: ["GatsbyJS", "CSS", "Strapi"],
  },
];
