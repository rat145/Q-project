import { useState } from "react";
import SurahData from "../../content/surah.json";

export default function QuranIndex() {
  const [indexTabActive, setIndexTabActive] = useState(1);
  const toggleIndexTabActive = (i) => {
    setIndexTabActive(i);
  };

  return (
    <div className="lg:mx-[100px] mx-5 lg:mt-0 mt-4">
      {/* TABS */}
      <div className="indexTabs">
        <ul className="list-none flex text-[#272727] leading-7 sm:text-base text-sm font-normal">
          <li
            className={`mr-5 hover:cursor-pointer ${
              indexTabActive === 1 && "border-b-2 border-[#272727] font-bold"
            }`}
            onClick={() => {
              toggleIndexTabActive(1);
            }}
          >
            Surah
          </li>
          <li
            className={`mr-5 hover:cursor-pointer ${
              indexTabActive === 2 && "border-b-2 border-[#272727] font-bold"
            }`}
            onClick={() => {
              toggleIndexTabActive(2);
            }}
          >
            Juz
          </li>
        </ul>
        <hr className="bg-[#EBEEF0] h-[1.2px] border-none" />
      </div>
      {/* TAB CONTENT START */}
      {/* Parent - Grid container START */}
      <div className="grid grid-cols-12 gap-5 mt-7 font-bold">
        {/* Child element - Card START */}
        {SurahData.map((element, index) => (
          <div
            className="qIndexCard flex justify-start items-center lg:col-span-4 sm:col-span-6 col-span-12 rounded border border-[#ECAE46] sm:py-5 py-4 pl-5 sm:pr-10 pr-5 cursor-pointer"
            key={index}
          >
            <div className="flex flex-col w-[20%]">
              <div className="qIndexNumBox border border-[#ECAE46] h-[40px] w-[40px] rotate-45 flex justify-center items-center rounded">
                <p className="qIndexSubtitle text-[#272727] rotate-[-45deg] md:text-sm text-xs">
                  {element.surahNum}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[60%] text-wrap">
              <h4 className="text-[#272727] sm:text-base text-sm">
                {element.surahTitle}
              </h4>
              <p className="qIndexSubtitle text-[#666666] sm:text-xs text-[10px]">
                {element.surahSubtitle}
              </p>
            </div>
            <div className="flex flex-col w-[20%] text-wrap">
              <p className="text-[#272727] sm:text-base text-sm text-right font-normal">
                {element.surahArabicTitle}
              </p>
              <p className="qIndexSubtitle text-[#666666] sm:text-xs text-[10px] text-right">
                {element.surahAyahs} Ayahs
              </p>
            </div>
          </div>
        ))}
        {/* Child element - Button card END */}
      </div>
      {/* Parent - Grid container END */}
      {/* TAB CONTENT END */}
    </div>
  );
}
