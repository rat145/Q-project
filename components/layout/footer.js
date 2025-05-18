export default function Footer({ callerPage }) {
  if (callerPage === "/") {
    return (
      <footer className="text-white mx-0 p-0 absolute bottom-3 lg:w-full">
        <div className="socials flex flex-row items-center md:mx-10 mx-5 mb-3">
          <span className="text-sm font-light">Follow us</span>
          &nbsp;&nbsp;&nbsp;
          <img src="/linkedin.svg" className="lg:w-6 w-5" />
          &nbsp;&nbsp;
          <img src="/instagram.svg" className="lg:w-6 w-5" />
          &nbsp;&nbsp;
          <img src="/linkedin.svg" className="lg:w-6 w-5" />
          &nbsp;&nbsp;
          <img src="/instagram.svg" className="lg:w-6 w-5" />
        </div>
        <div className="divider md:px-10 px-5 py-0">
          <hr />
        </div>
        <div className="md:px-40 px-5 pt-3 text-center">
          <p className="lg:text-xs text-[10px] font-light">
            &copy; Yaqeen Institute for Islamic Research 2024. We are a
            501&#40;C&#41;&#40;3&#41; organization. All donations are tax
            deductible. Our EIN is
          </p>
        </div>
      </footer>
    );
  } else if (callerPage === "/about" || callerPage === "/contact") {
    return (
      <footer className="text-white mx-0 p-0 absolute bottom-3 lg:w-full">
        <div className="divider md:px-10 px-5 py-0">
          <hr />
        </div>
        <div className="md:px-40 px-5 pt-3 text-center">
          <p className="lg:text-xs text-[10px] font-light">
            &copy; Yaqeen Institute for Islamic Research 2024. We are a
            501&#40;C&#41;&#40;3&#41; organization. All donations are tax
            deductible. Our EIN is
          </p>
        </div>
      </footer>
    );
  } else if (callerPage === "/quran") {
    return (
      <footer className="text-black mx-0 p-0 lg:mb-5 sm:mb-3 mb-2 lg:w-full">
        <div className="divider md:px-10 px-5 py-0">
          <hr className="border-[#646464]" />
        </div>
        <div className="md:px-40 px-5 pt-3 text-center">
          <p className="lg:text-xs sm:text-[10px] text-[8px] font-normal">
            &copy; Yaqeen Institute for Islamic Research 2024. We are a
            501&#40;C&#41;&#40;3&#41; organization. All donations are tax
            deductible. Our EIN is
          </p>
        </div>
      </footer>
    );
  }
}
