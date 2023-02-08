import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  {
    id: uuidv4(),
    link: "https://github.com/indranildeveloper",
    icon: <FaGithub />,
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com/in/indranildeveloper/",
    icon: <FaLinkedin />,
  },
  {
    id: uuidv4(),
    link: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    id: uuidv4(),
    link: "https://twitter.com/indranilcoder",
    icon: <FaTwitter />,
  },
];

const Socials: FC = () => {
  return (
    <div className="fixed hidden lg:block top-1/2 left-4">
      <div className="rotate-90 flex items-center gap-x-8 justify-center">
        {socials.map((socialLink) => (
          <a
            key={socialLink.id}
            href={socialLink.link}
            className="text-gray-400 text-2xl -rotate-90 transition-all duration-300 hover:text-blue-500"
            target="_blank"
            rel="noreferrer noopener"
          >
            {socialLink.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
