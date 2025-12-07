  import React, { useState } from "react";
  import { appleImg, bagImg, searchImg } from "../utils";
  import { navLists } from "../constants";
  import { Menu, X, ChevronRight } from "lucide-react";

  const Navbar = () => {
    const [openMobile, setOpenMobile] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    return (
      <header className="w-full py-4 px-5 sm:px-10 bg-black text-white">
        <nav className="flex justify-between items-center screen-max-width w-full">

          {/* Logo */}
          <img src="./logo.png" alt="Logo" className="w-20" width={40} height={40} />

{/* Desktop Menu */}
<div className="hidden md:flex gap-6 flex-1 justify-center relative z-[9999]">
  {navLists.map((item, index) => (
    <div key={index} className="relative group">
      <span className="cursor-pointer px-3 py-2 text-gray-100 hover:text-white transition">
        {item.label}
      </span>

      {/* FIRST LEVEL DROPDOWN */}
      {item.children && (
        <div
          className="
            absolute top-10 left-0 
            invisible opacity-0 group-hover:visible group-hover:opacity-100
            transition-all duration-200
            flex flex-col
            bg-black/90 backdrop-blur-md
            border border-zinc-800 
            rounded-xl shadow-2xl 
            w-56 py-3
            z-[9999]
          "
        >
          {item.children.map((child, i) => (
            <div key={i} className="relative group/sub">

              <span
                className="
                  flex justify-between items-center 
                  px-4 py-2 text-sm 
                  text-gray-100 hover:bg-zinc-800/60 hover:text-white
                  cursor-pointer rounded-md
                "
              >
                {child.label}
                {child.children && <ChevronRight size={14} />}
              </span>

              {/* SECOND LEVEL SUBMENU */}
              {child.children && (
                <div
                  className="
                    absolute top-0 left-full 
                    pl-1   /* ← THIS removes the gap */
                    invisible opacity-0
                    group-hover/sub:visible group-hover/sub:opacity-100
                    transition-all duration-200
                    flex flex-col
                    bg-black/90 backdrop-blur-md 
                    border border-zinc-800 
                    rounded-xl shadow-2xl 
                    w-56 py-3 
                    z-[9999]
                  "
                >
                  {child.children.map((sub, j) => (
                    <a
                      key={j}
                      href={sub.href}
                      className="
                        px-4 py-2 text-sm 
                        text-gray-100 hover:bg-zinc-800/60 hover:text-white 
                        rounded-md
                      "
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
</div>



          {/* Desktop Right Icons */}
          <div className="hidden md:flex gap-6 items-center">
              <img src={bagImg} width={18} height={18} alt="bag" className="cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpenMobile(!openMobile)}
          >
            {openMobile ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {openMobile && (
          <div className="md:hidden bg-black border-t border-zinc-800 mt-3 py-3">
            {navLists.map((item, index) => (
              <div key={index} className="border-b border-zinc-800">
                {/* First Level */}
                <div
                  className="px-4 py-3 flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setOpenMenu(openMenu === index ? null : index)
                  }
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronRight size={16} />}
                </div>

                {/* First Level Children */}
                {item.children && openMenu === index && (
                  <div className="pl-6 bg-zinc-900">
                    {item.children.map((child, i) => (
                      <div key={i} className="border-b border-zinc-800">

                        {/* Second Level */}
                        <div
                          className="px-4 py-3 flex justify-between items-center cursor-pointer"
                          onClick={() =>
                            setOpenSubMenu(openSubMenu === i ? null : i)
                          }
                        >
                          <span>{child.label}</span>
                          {child.children && <ChevronRight size={16} />}
                        </div>

                        {/* Second Level Children */}
                        {child.children && openSubMenu === i && (
                          <div className="pl-6 bg-zinc-800">
                            {child.children.map((sub, j) => (
                              <a
                                key={j}
                                href={sub.href}
                                className="block px-4 py-3 text-sm border-b border-zinc-700"
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Icons */}
            <div className="flex gap-6 items-center px-4 py-4">
              <img src={searchImg} width={18} height={18} alt="search" />
              <img src={bagImg} width={18} height={18} alt="bag" />
            </div>
          </div>
        )}
      </header>
    );
  };

  export default Navbar;
