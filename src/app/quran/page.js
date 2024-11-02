"use client";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Modal from "../../../components/Modal";
import { useState } from "react";
import Head from "next/head";

export default function Quran() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="p-0 m-0">
      <Header toggleModal={toggleModal} isScrollable={true} />
      {/* <img src="/assets/img/q-banner.webp" /> */}
      <div className="banner-img h-[402px]">
        <form className="p-0 m-0 flex flex-row w-full mb-5">
          <input
            type="text"
            placeholder="What are you looking for?"
            id="search-query"
            name="search-query"
            className="text-sm font-normal rounded-l lg:py-3 py-2 lg:pl-4 pl-3 w-full text-slate-700"
          />
          <button
            type="submit"
            className="bg-[#ecae46] rounded-r font-bold lg:text-lg text-base sm:px-[50px] px-[25px] search-button"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
