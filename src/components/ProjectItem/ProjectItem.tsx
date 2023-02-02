/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectItemProps {
    right?: boolean;
}

const ProjectItem: FC<ProjectItemProps> = ({ right }) => {
    return (
        <div
            className={`flex justify-between items-center flex-col-reverse ${
                right ? "md:flex-row" : "md:flex-row-reverse"
            }  gap-8 p-8 rounded-md bg-gray-800 mb-8 shadow-xl`}
        >
            <div className={`${right && "text-right"} flex-1`}>
                <p className="text-sm md:text-base text-blue-500">
                    Featured Project
                </p>
                <h2 className="text-2xl font-bold my-2">
                    MERN ECommerce Web App
                </h2>
                <p className="text-base md:text-lg text-gray-400">
                    Description: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Officiis voluptate corrupti atque! Harum,
                    provident. Cupiditate inventore, eaque adipisci modi dicta
                    consectetur error quod a quibusdam quisquam quaerat
                    provident maiores natus?
                </p>
                <ul
                    className={`flex items-center gap-4 flex-wrap my-4 ${
                        right && "justify-end"
                    }`}
                >
                    {/* TODO: Add different colors for different texh */}
                    <li className="px-3 py-1 rounded-md bg-blue-600">React</li>
                    <li className="px-3 py-1 rounded-md bg-blue-600">NodeJS</li>
                    <li className="px-3 py-1 rounded-md bg-blue-600">
                        Express
                    </li>
                    <li className="px-3 py-1 rounded-md bg-blue-600">NodeJS</li>
                </ul>

                <div
                    className={`links flex gap-6 mt-6 ${
                        right && "justify-end"
                    }`}
                >
                    <a
                        href="#a"
                        className="text-2xl block transition-all duration-300 text-gray-400 hover:text-blue-500"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="#a"
                        className="text-2xl block transition-all duration-300 text-gray-400 hover:text-blue-500"
                    >
                        <FiExternalLink />
                    </a>
                </div>
            </div>

            <div className="flex-1">
                <img
                    className="rounded-md"
                    src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                    alt="Project Showcase"
                />
            </div>
        </div>
    );
};

ProjectItem.defaultProps = {
    right: false,
};

export default ProjectItem;
