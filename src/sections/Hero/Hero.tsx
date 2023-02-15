import { FC } from "react";
import Typed from "react-typed";
import { Button } from "@/components/Button";

const Hero: FC = () => {
  return (
    <section id="hero" className="flex flex-col justify-center mb-10">
      <div className="md:px-24 xl:px-0">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-blue-500 text-lg">Hello, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Indranil Halder
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400">
            I build awesome Web Experiences.
          </h1>
        </div>

        <div className="mb-6">
          <Typed
            strings={[
              "I build Single Page Applications",
              "I build Full Stack Applications",
              "I build Awesome Experiences",
            ]}
            typeSpeed={40}
            loop
            className="font-secondary text-blue-500 text-2xl"
          />
        </div>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl">
          MERN Stack developer JavaScript enthusiast who has a predilection for
          design and enjoy working on projects where approaching design and
          development as co-dependent processes can lead to smarter solutions
          and a better overall product experience for human beings.
        </p>

        <div className="mt-10 flex gap-4">
          <Button link="/resume.pdf" newPage>
            Resume
          </Button>
          <Button link="#contact">Contact Me</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
