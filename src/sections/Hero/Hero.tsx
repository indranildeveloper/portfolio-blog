import { FC } from "react";
import { Button } from "@/components/Button";

const Hero: FC = () => {
    return (
        <section id="hero" className="flex flex-col justify-center mb-10">
            <div>
                <div className="flex flex-col gap-4 mb-10">
                    <p className="text-blue-500 text-lg">Hello, my name is</p>
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Indranil Halder
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-400">
                        I build awesome Web Experiences.
                    </h1>
                </div>
                <p className="text-base md:text-lg text-gray-400 max-w-2xl">
                    MERN Stack developer JavaScript enthusiast who has a
                    predilection for design and enjoy working on projects where
                    approaching design and development as co-dependent processes
                    can lead to smarter solutions and a better overall product
                    experience for human beings.
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
