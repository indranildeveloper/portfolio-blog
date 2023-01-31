import { FC, ReactNode } from "react";
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <main className="container max-w-4xl mx-auto py-8 px-8 md:px-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;
