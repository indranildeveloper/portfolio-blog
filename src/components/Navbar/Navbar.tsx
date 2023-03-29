import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTimes, FaBars, FaLaptopCode } from "react-icons/fa";
import { navLinks } from "@/data";
import { Sidebar } from "../Sidebar";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <motion.header
      className="shadow-xl px-8"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="flex h-24 justify-between items-center container mx-auto">
        <div>
          <Link href="/">
            <h2 className="transition-all duration-300 text-blue-500 hover:text-white">
              <FaLaptopCode size={34} />
            </h2>
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((navLink) => (
            <motion.li
              key={navLink.id}
              initial={{ x: -40 }}
              animate={{ x: 20 }}
            >
              <motion.a
                className="capitalize text-lg transition-all duration-300 hover:text-blue-500"
                href={navLink.link}
              >
                {navLink.title}
              </motion.a>
            </motion.li>
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
    </motion.header>
  );
};

export default Navbar;
