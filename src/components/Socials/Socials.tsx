import { FC } from "react";
import { socials } from "@/data";

const Socials: FC = () => {
  return (
    <div className="fixed hidden lg:block top-1/2 left-4 ">
      <div className="rotate-90 flex items-center gap-x-8 justify-center">
        {socials.map((socialLink) => (
          <a
            key={socialLink.id}
            href={socialLink.link}
            className="text-gray-400 text-2xl -rotate-90 transition-all duration-300 hover:text-blue-500 hover:-translate-x-2"
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
