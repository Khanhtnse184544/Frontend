import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const menu = [
    {
      title: "About Us",
      children: ["Core Team", "Partner"],
    },
    {
      title: "Get Involved",
      children: [
        "Our Fund",
        "Sponsor a tree",
        "Become a Sponsor",
        "Teachers & Students",
      ],
    },
    {
      title: "C.H.A.M",
      children: ["Our Project", "Our Game"],
    },
    {
      title: "News",
      children: [],
    },
  ];

  return (
    <div className="relative z-50 w-full flex items-center justify-between px-12 py-6 bg-black/70 backdrop-blur-sm text-white font-['League_Spartan']">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="./img/logo.png" alt="Logo" className="w-8 h-8" />
        <span className="text-2xl font-semibold">Home</span>
      </div>

      {/* Menu */}
      <ul className="absolute left-0 top-full mt-2 bg-black/80 text-white p-4 rounded-lg space-y-2 z-50">
        {menu.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:underline underline-offset-4">
              {item.title}
              {item.children.length > 0 && <FaChevronDown size={12} />}
            </div>

            {/* Dropdown menu */}
            {hovered === index && item.children.length > 0 && (
              <ul className="absolute left-0 top-full mt-2 bg-black/80 text-white p-4 rounded-lg space-y-2 z-50">
                {item.children.map((child, i) => (
                  <li key={i} className="hover:text-yellow-300 cursor-pointer">
                    └ {child}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-1 rounded-full border border-white bg-transparent text-white placeholder-white focus:outline-none"
        />
        <button className="absolute right-3 top-1.5 text-white">🔍</button>
      </div>
    </div>
  );
};

export default Navbar;
