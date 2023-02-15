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
      "A fully functional E-Commerce web application. It has custom authentication and authorization system, Normal user and admin dashboards with different levels of permissions. For the product it has create, read, update and delete functionality. Each products have its own rating and review system. Full Cart functionality. Has Stripe Checkout system and real-time progress of orders, product search and much more.",
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
      "A fully functional social media platform for developers. Has Authentication and Authorization system. Create, Read, Update and Delete Posts, Like and dislike posts. Every user has their own profile where they can Create and Update their every detail. Users can add their Experiences and Educations details. Also, the profile picture is shown by the Gravatar associated with their email. Users can add their social links, used technologies etc. If a user provides their GitHub username then in their profile their latest repos will be shown and much more.",
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
      "Full Stack NextJS Application with Strapi Backend to host, manage and find latest DJ and musical events. It has Customized Authentication system which Strapi provides and the authentication token being stored in http-only cookie on server side. Apart from that we have create, read, update and delete events functionality with image upload. We can search events. Images are uploaded to Cloudinary. In the single event page we are using geolocation and geocoding to fetch the latitude and longitude coordinates from the address provided and showing the location on a map and have much more...",
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
      "A Browser based code editor. It uses Monaco Editor which is being used by VS Code under the hood. It supports JavaScript and React JSX out of the box. We can create ad many code cells as we like. We have a preview which shows the result of the written code. Apart from that we have a fully featured Markdown Editor and Preview so that we can write documentation. Every Code and Markdown Cells are resizable and we can resize them as we like",
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
      "Full Stack Web Application for a Managing the issues of products with Authentication System. Create, Read, Update and Delete Functionality of Tickets Regarding the Products. We can have separate notes which are associated with every ticket. Also we can change the status of the ticket as well. So It is the issue management system for the Company.",
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
      "A Simple Markdown Blog. Where we can write content with markdown and when a new markdown file is created then according to the name a new dynamic path and new page is being created. We have certain filters with the tags and also we have search functionality. Apart from that the search results are being cached to increase the speed of the search.",
    featured: true,
    githubLink: "https://github.com/indranildeveloper/devspace",
    liveLink: "https://devspace-iota.vercel.app/",
    image: "/projects/devspace.png",
    technologies: ["React", "NextJS", "Markdown", "Tailwind CSS", "Husky"],
    flipped: true,
  },
];
