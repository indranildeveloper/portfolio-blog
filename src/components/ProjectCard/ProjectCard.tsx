import { FC } from "react";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard: FC = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-md shadow-xl">
            <div className="flex justify-between items-center">
                <div className="text-4xl text-blue-500">
                    <FiFolder />
                </div>
                <div className="flex gap-4 items-center">
                    <a
                        href="#a"
                        className="text-2xl text-gray-400 transition-all duration-300 hover:text-blue-500"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="#a"
                        className="text-2xl text-gray-400 transition-all duration-300 hover:text-blue-500"
                    >
                        <FiExternalLink />
                    </a>
                </div>
            </div>

            <div>
                <a href="#a">
                    <h2 className="my-4 text-2xl text-gray-400 font-bold transition-all duration-300 hover:text-blue-500">
                        Project Name
                    </h2>
                </a>
                <p className="text-sm md:text-base text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique quae autem, beatae repellendus distinctio
                </p>

                <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-gray-400">
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>Redux</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
