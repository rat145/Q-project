"use client";

import React from "react";
import Link from "next/link";
import { useWindowSize } from "../../src/hooks/useWindowSize";
import MobileHeader from "./mobile-header";
import { usePathname } from "next/navigation";

export default function Header({ toggleModal, isScrollable }) {
  const { width, height } = useWindowSize();
  const pathname = usePathname();

  if (width > 1024) {
    return (
      <header
        className={`bg-white/10 backdrop-blur-md flex flex-row justify-between items-center py-0 border-b-[1px] ${
          isScrollable && "absolute w-full"
        }`}
      >
        <div className="header-left w-[50%] py-2 px-0 m-0">
          <Link href="/">
            <img
              src="/assets/img/logo1.png"
              className="lg:pl-[100px] md:pl-[50px]"
            />
          </Link>
        </div>
        <div className="header-right w-[50%] p-0 m-0 flex flex-row justify-between items-center">
          <ul className="menu-list font-normal text-white sm:text-xs text-xs flex flex-row justify-between items-center h-full pr-8 m-0 w-[60%]">
            <li
              className={`menu-list-item ${
                pathname == "/quran" && "menu-list-item-active"
              }`}
            >
              <Link href="/quran">Quran</Link>
            </li>
            <li className="menu-list-item">
              <Link href="/">Hadith</Link>
            </li>
            <li className="menu-list-item">
              <Link href="/">Courses</Link>
            </li>
            <li
              className={`menu-list-item ${
                pathname == "/about" && "menu-list-item-active"
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`menu-list-item ${
                pathname == "/contact" && "menu-list-item-active"
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="font-normal text-white text-xs flex flex-row justify-between items-center lg:pr-[100px] m-0 w-[40%]">
            <li className="text-white font-bold py-2 px-4 rounded bg-gradient-to-b from-[#ecae46] to-[#c1752f]">
              <Link href="/donate">Donate</Link>
            </li>
            <li>
              <img src="/search.svg" />
            </li>
            <li className="cursor-pointer" onClick={toggleModal}>
              <img src="/profile.svg" />
            </li>
          </ul>
        </div>
      </header>
    );
  } else {
    return (
      <MobileHeader toggleModal={toggleModal} isScrollable={isScrollable} />
    );
  }
}
