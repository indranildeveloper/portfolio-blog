import { FC } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";

const HomePage: FC = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <Experience />
            <Skills />
        </Layout>
    );
};

export default HomePage;
