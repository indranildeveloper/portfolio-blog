import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="flex flex-col border-t-[1px] border-gray-400 justify-center items-center gap-4 p-10 mt-20">
            <p className="text-gray-400 transition-all duration-300 hover:text-blue-500">
                <a href="!#">Designed and Developed by Indranil Halder</a>
            </p>
            <p className="text-gray-400">
                Copyright &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
