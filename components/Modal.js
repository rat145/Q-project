import React, { useState, useEffect } from "react";
import Link from "next/link";
import { auth, provider } from "./config";
import {
  signInWithPopup,
  FacebookAuthProvider,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

export default function Modal({ toggleModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailOnly, setEmailOnly] = useState("");
  const [message, setMessage] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Google
  const handleGoogleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setName(data.user.displayName);
      setEmail(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  // Facebook
  const handleFacebookClick = () => {
    const this_provider = new FacebookAuthProvider();
    signInWithPopup(auth, this_provider).then((data) => {
      setName(data.user.displayName);
      setEmail(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  // Email Only sign in
  const handleEmailChange = (e) => {
    setEmailOnly(e.target.value);
  };

  const handleSendEmailLink = async (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      // URL you want to redirect back to after the sign-in is complete (this should be your site).
      url: "http://localhost:3000/", // or your deployment domain
      handleCodeInApp: true, // This must be true for email link sign-in.
    };
    try {
      // Send sign-in email link
      await sendSignInLinkToEmail(auth, emailOnly, actionCodeSettings);
      // Save the user's email in localStorage to use when they return to the app
      window.localStorage.setItem("emailForSignIn", emailOnly);
      // Update the message to notify the user
      setMessage(
        <>
          Click the link we sent to <b>{emailOnly}</b> to sign in. If you do not
          see the email in a few minutes, check your Spam or Junk mail folder.
        </>
      );
    } catch (error) {
      setMessage("Error sending email. Please try again.");
      console.error(error);
    }
  };

  //
  useEffect(() => {
    // Check if the user is returning from email link
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let emailForSignIn = window.localStorage.getItem("emailForSignIn");
      if (!emailForSignIn) {
        // Prompt the user to provide their email if it was not stored
        emailForSignIn = window.prompt(
          "Please provide your email for confirmation"
        );
      }

      signInWithEmailLink(emailForSignIn, window.location.href)
        .then((result) => {
          // Clear the email from storage
          window.localStorage.removeItem("emailForSignIn");

          // Set logged in state and save email to localStorage
          setEmail(result.user.email);
          setIsLoggedIn(true);
          window.localStorage.setItem("email", result.user.email);
        })
        .catch((error) => {
          console.error("Error signing in with email link", error);
        });
    }

    // Check if the user is already logged in
    const storedEmail = window.localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white flex flex-col rounded-lg gap-5 p-2 w-[621px] pb-10">
        <img
          src="x.svg"
          className="place-self-end cursor-pointer"
          onClick={toggleModal}
        />
        {email ? (
          <>
            <div className="row1 flex justify-between md:mx-14 mx-8">
              <span className="bottomleft-cap-line relative text-[#3E094B] text-lg font-bold">
                Welcome, {name ? name : email}!
              </span>
              <img src="assets/img/logo1.png" />
            </div>
            <p className="text-sm text-slate-500 md:mx-14 mx-8">
              You are successfully logged in.
            </p>
            <button
              className="bg-gradient-to-b from-[#ecae46] to-[#c1752f] text-white py-3 rounded md:mx-14 mx-8"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : message ? (
          <>
            <div className="row1 flex justify-between md:mx-14 mx-8">
              <span className="bottomleft-cap-line relative text-[#3E094B] text-lg font-bold">
                Check your email
              </span>
              <img src="assets/img/logo1.png" />
            </div>
            <p className="text-sm text-slate-500 md:mx-14 mx-8">{message}</p>
            <button
              className="bg-gradient-to-b from-[#ecae46] to-[#c1752f] text-white py-3 rounded md:mx-14 mx-8 w-[20%]"
              onClick={toggleModal}
            >
              OK
            </button>
          </>
        ) : (
          <>
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
                  onClick={handleGoogleClick}
                  className="border-2 py-3 flex-grow flex justify-center items-center rounded"
                >
                  <li>
                    <img src="google.svg" />
                  </li>
                </Link>
                <Link
                  href={"#"}
                  onClick={handleFacebookClick}
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
                  value={emailOnly}
                  onChange={handleEmailChange}
                />
                <button
                  type="submit"
                  onClick={handleSendEmailLink}
                  className="bg-gradient-to-b from-[#ecae46] to-[#c1752f] text-white py-3 rounded"
                >
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
          </>
        )}
      </div>
    </div>
  );
}
