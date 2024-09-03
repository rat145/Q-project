import React from "react";
import Link from "next/link";

export default function Modal({ toggleModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white flex flex-col rounded-lg gap-5 p-2 w-[621px] pb-10">
        <img
          src="x.svg"
          className="place-self-end cursor-pointer"
          onClick={toggleModal}
        />
        <div className="row1 flex justify-between md:mx-14 mx-8">
          <span className="text-[#3E094B] text-lg font-bold">
            Login or Signup
          </span>
          <img src="assets/img/logo1.png" />
        </div>
        <div className="row2 flex flex-col md:mx-14 mx-8">
          <div className="mb-1">
            <span className="topleft-cap-line relative text-sm text-slate-500 font-semibold">
              Continue with
            </span>
          </div>
          <ul className="list-none flex flex-row gap-2">
            <Link
              href={"#"}
              className="border-2 py-3 flex-grow flex justify-center items-center rounded"
            >
              <li>
                <img src="google.svg" />
              </li>
            </Link>
            <Link
              href={"#"}
              className="border-2 py-3 flex-grow flex justify-center items-center rounded"
            >
              <li>
                <img src="facebook.svg" />
              </li>
            </Link>
            <Link
              href={"#"}
              className="border-2 py-3 flex-grow flex justify-center items-center rounded"
            >
              <li>
                <img src="apple.svg" />
              </li>
            </Link>
          </ul>
        </div>
        <div className="row3 md:mx-14 mx-8">
          <hr />
          <span className="absolute inset-x-0 mx-auto text-xs text-slate-400 bg-white transform -translate-y-1/2 text-center w-12">
            Or
          </span>
        </div>
        <div className="row4 md:mx-14 mx-8">
          <form id="login-form" className="flex flex-col gap-4">
            <label className="text-sm text-slate-500 font-semibold">
              Email address
            </label>
            <input
              type="email"
              className="border-2 rounded px-2 py-3 mb-5 outline-none text-sm text-slate-700"
            />
            <button className="bg-gradient-to-b from-[#ecae46] to-[#c1752f] text-white py-3 rounded">
              Continue
            </button>
            <p className="text-[10px] text-slate-500 text-center">
              By signing up, I agree to Yaqeen Institute’s&nbsp;
              <Link href={"#"} className="font-semibold cursor-pointer">
                terms of use
              </Link>
              &nbsp;and&nbsp;
              <Link href={"#"} className="font-semibold cursor-pointer">
                privacy policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
