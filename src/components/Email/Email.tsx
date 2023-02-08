import { FC } from "react";

const Email: FC = () => {
  return (
    <div className="fixed hidden lg:block top-1/2 right-0">
      <div className="rotate-90 flex items-center justify-center">
        <a
          href="mailto:indranilhalder.dev@gmail.com"
          className="text-gray-400 text-xl transition-all duration-300 hover:text-blue-500"
        >
          indranilhalder.dev@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Email;
