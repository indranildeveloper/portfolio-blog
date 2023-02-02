import { FC } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { ProjectsGrid } from "@/sections/ProjectsGrid";
import { Contact } from "@/sections/Contact";

const HomePage: FC = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <ProjectsGrid />
            <Contact />
        </Layout>
    );
};

export default HomePage;
