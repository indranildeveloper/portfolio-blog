import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 p-10 mt-20">
      <p className="text-gray-400 transition-all duration-300 hover:text-blue-500">
        <a
          href="https://github.com/indranildeveloper"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and Developed by Indranil Halder
        </a>
      </p>
      <p className="text-gray-400">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
