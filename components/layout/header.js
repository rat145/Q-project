import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md flex flex-row justify-between items-center py-0 border-b-[1px]">
      <div className="header-left w-[50%] py-2 px-0 m-0">
        <Link href="/">
          <img src="/assets/img/logo1.png" className="pl-[100px]" />
        </Link>
      </div>
      <div className="header-right w-[50%] p-0 m-0 flex flex-row justify-between items-center">
        <ul className="font-normal text-white sm:text-xs text-xs flex flex-row justify-between items-center h-full pr-8 m-0 w-[60%]">
          <li className="menu-list-item">
            <Link href="/">Quran</Link>
          </li>
          <li className="menu-list-item">
            <Link href="/hadith">Hadith</Link>
          </li>
          <li className="menu-list-item">
            <Link href="/courses">Courses</Link>
          </li>
          <li className="menu-list-item">
            <Link href="/more">More</Link>
          </li>
          <li className="menu-list-item">
            <Link href="/about">About</Link>
          </li>
          <li className="menu-list-item">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="font-normal text-white sm:text-xs text-xs flex flex-row justify-between items-center pr-[100px] m-0 w-[40%]">
          <li className="text-white font-bold py-2 px-4 rounded bg-gradient-to-b from-[#ecae46] to-[#c1752f]">
            <Link href="/donate">Donate</Link>
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.2708 31.8046L24.0479 21.5817C25.6956 19.318 26.582 16.5896 26.5796 13.7898C26.5796 6.46167 20.6179 0.5 13.2898 0.5C5.96167 0.5 0 6.46167 0 13.7898C0 21.1179 5.96167 27.0796 13.2898 27.0796C16.0895 27.0824 18.8178 26.1965 21.0817 24.5494L31.3046 34.7708L34.2708 31.8046ZM13.2898 22.8825C11.491 22.8828 9.73255 22.3496 8.2368 21.3505C6.74104 20.3513 5.5752 18.931 4.8867 17.2692C4.1982 15.6074 4.01798 13.7787 4.36884 12.0145C4.71969 10.2503 5.58586 8.62972 6.85779 7.35779C8.12972 6.08586 9.75028 5.21969 11.5145 4.86884C13.2787 4.51798 15.1074 4.6982 16.7692 5.3867C18.431 6.0752 19.8513 7.24104 20.8505 8.7368C21.8496 10.2325 22.3828 11.991 22.3825 13.7898C22.3794 16.2004 21.4204 18.5114 19.7159 20.2159C18.0114 21.9204 15.7004 22.8794 13.2898 22.8825Z"
                fill="white"
              />
            </svg>
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9053 18.4067C16.6761 18.4067 18.4072 17.8817 19.8795 16.8978C21.352 15.9141 22.4996 14.5158 23.1772 12.8798C23.8549 11.2436 24.0321 9.44344 23.6868 7.70667C23.3412 5.96989 22.4886 4.37455 21.2364 3.12238C19.9842 1.87023 18.3888 1.0175 16.652 0.672044C14.9152 0.326567 13.1151 0.503886 11.4791 1.18155C9.84309 1.85921 8.44475 3.00677 7.46085 4.47915C6.47711 5.95153 5.95196 7.68254 5.95196 9.45337C5.95196 11.828 6.89533 14.1053 8.57438 15.7845C10.2534 17.4635 12.5308 18.4067 14.9053 18.4067ZM19.789 22.4765C19.5441 22.4784 19.3008 22.5161 19.0666 22.5883C16.3715 23.5245 13.4393 23.5245 10.744 22.5883C10.51 22.5161 10.2667 22.4784 10.0216 22.4765C5.6569 22.4765 1.91276 24.9591 0 28.5607C6.92561 36.7927 19.2131 37.852 27.4451 30.9262C28.2999 30.2067 29.0912 29.4154 29.8106 28.5607C27.8979 24.9591 24.1537 22.4765 19.789 22.4765Z"
                fill="white"
              />
            </svg>
          </li>
        </ul>
      </div>
    </header>
  );
}
