import { FC, ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}

const Link: FC<LinkProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="text-blue-500 transition-all duration-300 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Link;
