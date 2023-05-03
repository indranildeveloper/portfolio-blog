import { FC, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold">{children}</h1>
      <div className="h-[2px] w-full bg-blue-500" />
    </div>
  );
};

export default Heading;
