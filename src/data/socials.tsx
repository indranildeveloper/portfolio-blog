import { v4 as uuidv4 } from "uuid";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

export const socials = [
  {
    id: uuidv4(),
    link: "https://github.com/indranildeveloper",
    icon: <FiGithub />,
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com/in/indranildeveloper/",
    icon: <FiLinkedin />,
  },
  {
    id: uuidv4(),
    link: "https://www.instagram.com/",
    icon: <FiInstagram />,
  },
  {
    id: uuidv4(),
    link: "https://twitter.com/indranilcoder",
    icon: <FiTwitter />,
  },
];
