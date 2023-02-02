import { FC, ReactNode } from "react";
import { Seo } from "../Seo";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Seo />
            <div className="bg-slate-900 text-white">
                <Navbar />
                <main className="container max-w-4xl mx-auto py-8 px-8 md:px-0">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
