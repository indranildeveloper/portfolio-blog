import { FC, useState } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
import { Sidebar } from "../Sidebar";
import { navLinks } from "@/data";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-xl px-4 md:px-0">
      <nav className="flex h-24 justify-between items-center container mx-auto">
        <div>
          <Link href="/">
            <h2 className="text-2xl">Indranil Halder</h2>
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <a className="capitalize text-lg" href={navLink.link}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="absolute top-10 right-8 z-20 md:hidden"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {isOpen && <Sidebar />}
      </nav>
    </header>
  );
};

export default Navbar;
