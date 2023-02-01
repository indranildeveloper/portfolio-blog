import { FC } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";

const HomePage: FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
    </Layout>
  );
};

export default HomePage;
