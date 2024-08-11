import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import HeroSection from "../../components/sections/hero";
import React from "react";
import "./globals.css";

export default function Home() {
  return (
    <section className="site-background p-0 m-0 h-[100vh]">
      <Header />
      <HeroSection />
      <Footer callerPage={"/"} />
    </section>
  );
}
