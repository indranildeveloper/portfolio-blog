import { FC } from "react";

const Email: FC = () => {
  return (
    <div className="fixed hidden lg:block top-1/2 -right-4 transition-all duration-300 hover:-translate-y-2">
      <div className="rotate-90 flex items-center justify-center">
        <a
          href="mailto:indranilhalder.dev@gmail.com"
          className="text-gray-400 text-base font-secondary transition-all duration-300 hover:text-blue-500"
          target="_blank"
          rel="noreferrer noopener"
        >
          indranilhalder.dev@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Email;
