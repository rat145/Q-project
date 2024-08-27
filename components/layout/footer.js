export default function Footer({ callerPage }) {
  if (callerPage === "/") {
    return (
      <footer className="text-white mx-0 p-0 absolute lg:w-full">
        <div className="socials flex flex-row items-center mx-10 mb-3">
          <span className="text-sm font-light">Follow us</span>
          &nbsp;&nbsp;&nbsp;
          <img src="/linkedin.svg" />
          &nbsp;&nbsp;
          <img src="/instagram.svg" />
          &nbsp;&nbsp;
          <img src="/linkedin.svg" />
          &nbsp;&nbsp;
          <img src="/instagram.svg" />
        </div>
        <div className="divider px-10 py-0">
          <hr />
        </div>
        <div className="px-40 pt-3 text-center">
          <p className="lg:text-xs text-[10px] font-light">
            &copy; Yaqeen Institute for Islamic Research 2024. We are a
            501&#40;C&#41;&#40;3&#41; organization. All donations are tax
            deductible. Our EIN is
          </p>
        </div>
      </footer>
    );
  }
}
