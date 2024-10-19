"use client";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Modal from "../../../components/Modal";
import { useState } from "react";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="contact-background p-0 m-0 h-screen">
      <Header toggleModal={toggleModal} />
      {/* Contact us content Start */}
      <div className="lg:mx-[100px] mx-5 lg:mt-5 mt-3">
        <h3 className="lg:text-[35px] md:text-[25px] text-[20px] font-extrabold bg-gradient-to-r from-[#ecae46] to-[#C1752F] bg-clip-text text-transparent">
          Contact us
        </h3>
        <form className="text-white flex flex-col lg:w-2/6 md:w-full lg:text-base text-sm mt-4">
          <label for="email">
            Email<span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="text-gray-800 p-2 rounded mb-4"
          />
          <label for="fname">
            First Name<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="fname"
            required
            className="text-gray-800 p-2 rounded mb-4"
          />
          <label for="lname">
            Last Name<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="lname"
            required
            className="text-gray-800 p-2 rounded mb-4"
          />
          <label for="phone">
            Mobile Number<span className="text-red-700">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="text-gray-800 p-2 rounded mb-4"
          />
          <label for="message">
            Message<span className="text-red-700">*</span>
          </label>
          <textarea
            rows="3"
            id="message"
            required
            placeholder="What can we help you with?"
            className="text-gray-800 p-2 rounded md:mb-4 mb-2"
          ></textarea>
          <button
            type="submit"
            className="self-start md:px-4 md:py-2 px-3 py-1 mt-4 bg-gradient-to-b from-[#ecae46] to-[#c1752f] rounded"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Contact us content End */}
      <Footer callerPage={"/contact"} />
      {showModal && <Modal toggleModal={toggleModal} />}
    </section>
  );
}
