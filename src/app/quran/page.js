"use client";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Modal from "../../../components/Modal";
import { useState } from "react";
import QuranIndex from "../../../components/sections/quran-index";

export default function Quran() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [tabActive, setTabActive] = useState(1);
  const toggleTabActive = (index) => {
    setTabActive(index);
  };

  return (
    <section className="p-0 m-0">
      {/* Header */}
      <Header toggleModal={toggleModal} isScrollable={true} />
      {/* Banner */}
      <div className="banner-img lg:h-[360px] md:h-[402px] h-[300px] text-white flex flex-col justify-center items-center md:pt-0 pt-28">
        <div className="lg:w-[60%] w-[90%]">
          <form className="p-0 m-0 flex flex-row w-full mb-5">
            <input
              type="text"
              placeholder="What do you want to read?"
              id="search-query"
              name="search-query"
              className="text-sm font-normal rounded-l lg:py-3 py-2 lg:pl-4 pl-3 w-full text-slate-700"
            />
            <button
              type="submit"
              className="bg-[#ecae46] rounded-r font-bold lg:text-lg text-base sm:px-[50px] px-[25px] active:bg-[#c1752f] hover:bg-[#c1752f] transition-all"
            >
              Search
            </button>
          </form>
          <ul className="list-none flex leading-7 sm:text-base text-sm font-normal">
            <li
              className={`mr-5 hover:cursor-pointer sm:pb-2 ${
                tabActive === 1 && "border-b-2"
              }`}
              onClick={() => {
                toggleTabActive(1);
              }}
            >
              Recently Read
            </li>
            <li
              className={`mr-5 hover:cursor-pointer sm:pb-2 ${
                tabActive === 2 && "border-b-2"
              }`}
              onClick={() => {
                toggleTabActive(2);
              }}
            >
              Bookmarks
            </li>
            <li
              className={`mr-5 hover:cursor-pointer sm:pb-2 ${
                tabActive === 3 && "border-b-2"
              }`}
              onClick={() => {
                toggleTabActive(3);
              }}
            >
              Collection
            </li>
          </ul>
          <hr />
          <p className="text-sm font-light mt-3">
            {tabActive === 1 && (
              <span>You do not have any reading sessions yet</span>
            )}
            {tabActive === 2 && <span>You do not have any bookmarks yet</span>}
            {tabActive === 3 && <span>You do not have collections yet</span>}
          </p>
        </div>
      </div>
      {/* Index */}
      <QuranIndex />
      {/* Login Modal */}
      {showModal && <Modal toggleModal={toggleModal} />}
    </section>
  );
}
