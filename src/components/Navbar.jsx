import React, { useState } from "react";
import { FaSearch, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const menu = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { 
    title: "Get Involved", 
    hasDropdown: true,
    dropdownItems: [
      { title: "Our Fund", path: "/our-fund" },
      { title: "Sponsor a tree", path: "/sponsor" },
      { title: "Become a Sponsor", path: "/become-sponsor" },
      { title: "For school education", path: "/for-school-education" },
      { title: "Our Partner", path: "/our-partner" }
    ]
  },
  { 
    title: "C.H.A.M",
    hasDropdown: true,
    dropdownItems: [
      { title: "Our Project", path: "/our-project" },
      { title: "Our Game", path: "/our-game"}
    ]
  },
  { title: "News", path: "/news" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  // Check active states
  const isActive = (path) => location.pathname === path;
  
  const isGetInvolvedActive = () => {
    const getInvolvedPaths = ['/our-fund', '/sponsor', '/become-sponsor', '/for-school-education', '/our-partner'];
    return getInvolvedPaths.includes(location.pathname);
  };

  const isCHAMActive = () => {
    const chamPaths = ['/our-project', '/our-game'];
    return chamPaths.includes(location.pathname);
  };

  const handleDropdownEnter = (title) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(title);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Small delay to allow moving mouse to dropdown
    setDropdownTimeout(timeout);
  };

  const handleDropdownMenuEnter = (title) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(title);
  };

  const handleDropdownMenuLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleMenuClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className="w-full flex justify-center items-center select-none mt-8">
      <nav
        className={`
          flex items-center justify-center
          bg-black bg-opacity-95 text-white rounded-full shadow-2xl
          transition-all duration-300 ease-in-out
          font-sans
          ${hovered
            ? 'w-[715px] h-[78px] gap-8 2xl:w-[1000px] 2xl:h-[120px] 2xl:gap-10'
            : 'w-[555px] h-[70px] gap-4.5 2xl:w-[770px] 2xl:h-[100px] 2xl:gap-6'}
        `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ maxWidth: '98vw' }}
      >
        {menu.map((item) => {
          // Determine if this item is active
          let isItemActive = false;
          if (item.title === "Home") {
            isItemActive = isActive("/");
          } else if (item.title === "About Us") {
            isItemActive = isActive("/about");
          } else if (item.title === "Get Involved") {
            isItemActive = isGetInvolvedActive();
          } else if (item.title === "C.H.A.M") {
            isItemActive = isCHAMActive();
          } else if (item.title === "News") {
            isItemActive = isActive("/news");
          }

          return (
            <div key={item.title} className="relative">
              <div
                className={`
                  flex items-center gap-1 cursor-pointer
                  transition-all duration-300
                  ${hovered
                    ? 'text-[1.3rem] 2xl:!text-3xl font-light tracking-wide 2xl:tracking-wider'
                    : 'text-[1.19rem] 2xl:!text-2xl font-light tracking-tight 2xl:tracking-wide'}
                  ${isItemActive ? 'text-[#D68C45] font-bold' : 'text-white hover:text-[#D68C45]'}
                `}
                style={{fontFamily: 'Pally-Regular, sans-serif'}}
                onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.title)}
                onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
                onClick={() => handleMenuClick(item)}
              >
                <span className="">{item.title} </span>
                {item.hasDropdown && (
                  <span className="transition-transform duration-200">
                    {openDropdown === item.title 
                      ? <FaChevronUp className="w-3 h-3 2xl:w-4 2xl:h-4" /> 
                      : <FaChevronDown className="w-3 h-3 2xl:w-4 2xl:h-4" />}
                  </span>
                )}
              </div>
            
            {/* Dropdown Menu */}
            {item.hasDropdown && openDropdown === item.title && (
              <div 
                className="absolute top-full left-0 mt-2 bg-black bg-opacity-95 rounded-lg shadow-xl py-2 2xl:py-3 min-w-[280px] 2xl:min-w-[400px] z-50"
                onMouseEnter={() => handleDropdownMenuEnter(item.title)}
                onMouseLeave={() => handleDropdownMenuLeave()}
              >
                {item.dropdownItems.map((dropdownItem, index) => {
                  const isDropdownItemActive = isActive(dropdownItem.path);
                  return (
                    <div key={index} className="relative">
                      <div 
                        className={`
                          px-4 2xl:px-5 py-2 2xl:py-3 cursor-pointer transition-colors duration-200
                          ${isDropdownItemActive ? 'text-[#D68C45] font-bold' : 'hover:text-[#D68C45]'}
                          text-[1.44rem] 2xl:text-3xl font-light tracking-wide 2xl:tracking-wider
                        `}
                        onClick={() => dropdownItem.path && navigate(dropdownItem.path)}
                      >
                        {dropdownItem.title} <span className="text-[#D68C45] font-bold text-4xl 2xl:text-5xl"> _ </span>
                      </div>
                      {dropdownItem.hasLine && (
                        <div className=" text-[1.44rem] font-light tracking-wide absolute left-2 right-2 h-px bg-[#D68C45] opacity-50"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
        })}
        <span className={`ml-2 text-white cursor-pointer transition-all duration-300 ${hovered ? 'text-xl 2xl:text-2xl' : 'text-base 2xl:text-lg'}`}>
          <FaSearch />
        </span>
      </nav>
    </div>
  );
}