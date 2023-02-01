import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Indranil Halder | Portfolio</title>
                <link rel="icon" href="/logo.png" type="image/x-icon" />
            </Head>
            <div className="bg-slate-900 text-white">
                <Navbar />
                <main className="container max-w-4xl mx-auto py-8 px-8 md:px-0">
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;
