import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileHeader({ toggleModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-header-parent-container">
      {/* Glass header */}
      <header className="bg-white/10 backdrop-blur-md flex flex-row justify-between items-center py-0 border-b-[1px]">
        <div className="mobile-header-container w-[100%] py-1 px-0 m-0 flex justify-between items-center">
          <img src="/hamburger.svg" className="pl-5" onClick={toggleMenu} />
          <Link href="/">
            <img src="/assets/img/logo1.png" className="h-11" />
          </Link>
          <ul className="flex">
            <li className="pr-5">
              <img src="/search.svg" />
            </li>
            <li className="pr-5" onClick={toggleModal}>
              <img src="/profile.svg" />
            </li>
          </ul>
        </div>
      </header>
      {/* Hamburger Menu */}
      <nav
        className={`ham-menu-container z-10 ${
          isMenuOpen ? "open" : ""
        } w-[40%] bg-white absolute left-[4%] sm:left-[2%] rounded-lg shadow-slate-700`}
      >
        <ul className="ham-menu-list font-semibold text-[#B2B6B9] text-sm">
          <li className="ham-menu-list-item hover:bg-slate-200 hover:text-[#4b5563] px-5 py-4">
            <Link href="/">Salah Tracker</Link>
          </li>
          <li className="ham-menu-list-item hover:bg-slate-200 hover:text-[#4b5563] px-5 py-4">
            <Link href="/">Qiblah Tracker</Link>
          </li>
        </ul>
      </nav>
      {/* Menu */}
      <nav
        className={`bg-white mobile-menu open ${
          isMenuOpen ? "mobile-menu-bg-toggle" : ""
        }`}
      >
        <ul className="mobile-menu-list font-semibold text-[#B2B6B9] text-xs flex flex-row justify-between items-center m-0 h-12 md:px-60 px-10">
          <li className={`mobile-menu-list-item`}>
            <Link href="/">Quran</Link>
          </li>
          <li className="mobile-menu-list-item">
            <Link href="/">Hadith</Link>
          </li>
          <li className="mobile-menu-list-item">
            <Link href="/">Courses</Link>
          </li>
          <li
            className={`mobile-menu-list-item ${
              pathname == "/about" && "mobile-menu-list-item-active"
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`mobile-menu-list-item ${
              pathname == "/contact" && "mobile-menu-list-item-active"
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
