"use client";
import Footer from "../../../components/layout/footer";
import Header from "../../../components/layout/header";
import Modal from "../../../components/Modal";
import { useState } from "react";

export default function About() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="about-background p-0 m-0 h-screen">
      <Header toggleModal={toggleModal} />
      {/* About Content Start */}
      <div className="lg:ml-[100px] ml-5 lg:mt-5 mt-3 xl:w-3/6 lg:w-4/6 md:w-4/5 w-11/12 relative sm:max-h-none max-h-[70%] md:overflow-auto overflow-y-scroll flex flex-col xl:gap-3 md:gap-2 gap-1">
        <h3 className="lg:text-[35px] md:text-[25px] text-[20px] font-extrabold bg-gradient-to-r from-[#ecae46] to-[#C1752F] bg-clip-text text-transparent">
          Our Story
        </h3>
        <p className="text-white md:text-[16px] sm:text-[15px] text-[14px] leading-5">
          This website was created as an open-source platform for everyone. It
          began as a dream by an Alima student, who envisioned an all-in-one
          website for the Muslim Ummah. This vision was rooted in the desire to
          bridge gaps and make Islamic knowledge more accessible to everyone,
          regardless of their level of understanding or where they are on their
          spiritual journey. The platform would not only provide scholarly
          insights from trusted sources but also offer tools like a Salah
          tracker, Zakat calculator, and a Qibla guide to help Muslims practice
          their faith more effectively in their daily lives.
        </p>
        <h3 className="lg:text-[35px] md:text-[25px] text-[20px] font-extrabold bg-gradient-to-r from-[#ecae46] to-[#C1752F] bg-clip-text text-transparent">
          Our Inspiration
        </h3>
        <p className="text-white md:text-[16px] sm:text-[15px] text-[14px] leading-5">
          We have been inspired by many notable Islamic websites such as
          Quran.com, Yaqeen Institute, Bayyinah TV, Islamic Online University,
          and many others. These platforms have paved the way for accessible and
          credible Islamic knowledge, and we strive to build upon their legacy.
        </p>
        <h3 className="lg:text-[35px] md:text-[25px] text-[20px] font-extrabold bg-gradient-to-r from-[#ecae46] to-[#C1752F] bg-clip-text text-transparent">
          Our Commitment
        </h3>
        <p className="text-white md:text-[16px] sm:text-[15px] text-[14px] leading-5">
          We continuously add new updates to benefit our users, striving to
          provide the most valuable and comprehensive resources available. It
          took a lot of planning and effort to design a user-friendly website
          that offers the best experience possible. We are dedicated to making
          this platform a beacon of knowledge and support for the Muslim
          Ummah.Become part of Ilmulislam and start your journey of Ilm in Islam
          today. May Allah guide this Ummah and grant us success in our efforts
          to serve Him and our community.
        </p>
      </div>
      {/* About Content End */}
      <Footer callerPage={"/about"} />
      {showModal && <Modal toggleModal={toggleModal} />}
    </section>
  );
}
