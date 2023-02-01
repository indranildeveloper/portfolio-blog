import { v4 as uuidv4 } from "uuid";

import {
    FaGraduationCap,
    FaChartLine,
    FaCode,
    FaBookReader,
} from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

export const navLinks = [
    {
        id: uuidv4(),
        title: "about",
        link: "#about",
    },
    {
        id: uuidv4(),
        title: "experience",
        link: "#experience",
    },
    {
        id: uuidv4(),
        title: "Skills",
        link: "#Skills",
    },
    {
        id: uuidv4(),
        title: "projects",
        link: "#projects",
    },
    {
        id: uuidv4(),
        title: "blog",
        link: "#blog",
    },
    {
        id: uuidv4(),
        title: "contact",
        link: "#contact",
    },
];

interface ExperienceType {
    id: string;
    date: string;
    icon: JSX.Element;
    title: string;
    location: string;
    description: string;
}

export const experiences: Array<ExperienceType> = [
    {
        id: uuidv4(),
        date: "2021 - Current",
        icon: <FaChartLine />,
        title: "Going On",
        location: "University of Gour Banga, Malda",
        description:
            "Started Master's Degree in Physics, learning everyday new things and finding an exciting opportunity.",
    },
    {
        id: uuidv4(),
        date: "2020",
        icon: <FaGraduationCap />,
        title: "Graduation",
        location: "Balurghat College, Balurghat",
        description: "Completed my Bachelor's Degree(Hons.) in Physics.",
    },
    {
        id: uuidv4(),
        date: "2019",
        icon: <FaCode />,
        title: "Working On",
        location: "Balurghat,IN",
        description:
            "Working in various Projects with different web development technologies.",
    },
    {
        id: uuidv4(),
        date: "2018",
        icon: <SiVisualstudiocode />,
        title: "Started Programming",
        location: "Balurghat, IN",
        description:
            "Started My Programming Journey in a local programming bootcamp.",
    },
    {
        id: uuidv4(),
        date: "2017",
        icon: <FaBookReader />,
        title: "Started Graduation",
        location: "Balurghat College",
        description: "Started my Bachelor's Degree(Hons.) in Physics",
    },
];
