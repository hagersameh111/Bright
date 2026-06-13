import { useState } from "react";
import { NavLink } from "react-router-dom";

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
          className="text-white lg:hidden"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="bg-black lg:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
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
          ))}
        </div>
      )}
    </header>
  );
}