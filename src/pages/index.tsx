import { FC } from "react";
import { Layout } from "@/components/Layout";
import { Email } from "@/components/Email";
import { Socials } from "@/components/Socials";
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
            <Email />
            <Socials />
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
