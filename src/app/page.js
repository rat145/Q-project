"use client";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import HeroSection from "../../components/sections/hero";
import React, { useState } from "react";
import "./globals.css";
import Modal from "../../components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="site-background p-0 m-0 h-[100vh]">
      <Header toggleModal={toggleModal} />
      <HeroSection />
      <Footer callerPage={"/"} />
      {showModal && <Modal toggleModal={toggleModal} />}
    </section>
  );
}
