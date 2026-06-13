import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "News",
      path: "/news",
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-xl font-semibold text-white">
            Bright Marketing
          </h1>
        </div>

        <nav className="hidden gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-[#FF2E0F]"
                    : "text-white hover:text-[#FF2E0F]"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden "
        >
         <BsList size={30} />
        </button>
      </div>

     <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden bg-black lg:hidden"
    >
      {navLinks.map((link, index) => (
        <motion.div
          key={link.title}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
          }}
        >
          <NavLink
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block border-b border-white/10 px-6 py-4 ${
                isActive
                  ? "text-[#FF2E0F]"
                  : "text-white"
              }`
            }
          >
            {link.title}
          </NavLink>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}