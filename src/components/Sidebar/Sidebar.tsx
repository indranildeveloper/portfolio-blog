import { navLinks } from "@/data";

const Sidebar = () => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-screen backdrop-blur-sm ">
            <ul className="flex flex-col items-center justify-center gap-6 w-4/5 absolute top-0 right-0 h-screen z-10 shadow-2xl bg-slate-800">
                {navLinks.map((navLink) => (
                    <li key={navLink.id}>
                        <a className="capitalize text-lg" href={navLink.link}>
                            {navLink.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Sidebar;
