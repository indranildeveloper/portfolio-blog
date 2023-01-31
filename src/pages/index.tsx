import { FC } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";

const HomePage: FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default HomePage;
