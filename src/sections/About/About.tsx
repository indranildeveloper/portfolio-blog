import { FC } from "react";
import Image from "next/image";
import { Heading } from "@/components/Heading";

const About: FC = () => {
  return (
    <section id="about" className="flex flex-col justify-center">
      <Heading>About Me</Heading>

      <div className="flex flex-col md:flex-row gap-4 items-center mt-10">
        <div className="w-full md:w-4/5 flex flex-col gap-6">
          <p className="text-base md:text-lg text-gray-400">
            Hello My name is Indranil Halder and I enjoy building full stack web
            applications. I am writing code for 4+ years. I started my
            programming journey when I was in the First Year of my Graduation. I
            have completed my Graduation in Physics and Currently studying
            Masters Degree in Physics.
          </p>

          <p className="text-base md:text-lg text-gray-400">
            Programming is my hobby and passion. I am a self-taught developer
            and most of the things I have learnt is from Books or Internet,
            whether it is a Youtube Video or Some Udemy Courses or any other
            resources.
          </p>

          <p className="text-base md:text-lg text-gray-400">
            Fast forward to today I have worked on several technologies and I
            have built several projects. Currently I am working as the Frontend
            Developer at Private AI.
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <Image
            width={300}
            height={100}
            className="rounded-md"
            src="/about.jpg"
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
