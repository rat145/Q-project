import { useState, useEffect } from "react";
import axios from "axios";
import SurahCard from "../SurahCard";
import JuzIndex from "./juz-index";

const baseURL = "https://api.alquran.cloud/v1";

export default function QuranIndex() {
  const [data, setData] = useState(null);
  const [juzData, setJuzData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [indexTabActive, setIndexTabActive] = useState(1);
  const toggleIndexTabActive = (i) => {
    setIndexTabActive(i);
  };

  useEffect(() => {
    axios
      .get(baseURL + "/surah")
      .then((response) => {
        if (response.data.status === "OK") {
          setData(response.data.data);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        setData("Error fetching data. Try again after some time.");
        setIsLoading(false);
      });
  }, [indexTabActive]);

  return (
    <div className="relative lg:mx-[100px] mx-5 lg:mt-0 mt-4">
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
      {/* TABS END */}
      {/* Loading State START */}
      {isLoading && <div className="absolute loader"></div>}
      {/* Loading State END */}
      {/* TAB CONTENT START */}
      <div className="grid grid-cols-12 gap-5 mt-7 mb-20 font-bold relative">
        {indexTabActive === 1 ? (
          // ---SURAH---
          Array.isArray(data) && data.length > 0 ? (
            data.map((element) => (
              <SurahCard
                key={element.number}
                number={element.number}
                englishName={element.englishName}
                englishNameTranslation={element.englishNameTranslation}
                name={element.name}
                numberOfAyahs={element.numberOfAyahs}
              />
            ))
          ) : (
            <p className="text-sm font-normal absolute">{data}</p> // error msg
          )
        ) : (
          // ---JUZ---
          <JuzIndex data={data} />
        )}
      </div>
      {/* TAB CONTENT END */}
    </div>
  );
}
