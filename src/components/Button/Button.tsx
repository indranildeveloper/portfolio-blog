import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  submit?: boolean;
  link: string;
}

const Button: FC<ButtonProps> = ({ children, submit, link }) => {
  return (
    <button
      className="border-2 border-blue-500 px-10 py-2 md:px-16 md:py-3 text-base md:text-lg rounded-md text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:bg-opacity-10"
      type={submit ? "submit" : "button"}
    >
      <a href={link}>{children}</a>
    </button>
  );
};

Button.defaultProps = {
  submit: false,
};

export default Button;
