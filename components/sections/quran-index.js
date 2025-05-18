import { useState, useEffect, use } from "react";
import axios from "axios";
import SurahCard from "../SurahCard";

const baseURL = "http://api.alquran.cloud/v1";

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
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(baseURL + "/juz/1")
  //     .then((response) => {
  //       if (response.data.status === "OK") {
  //         setData(response.data.data);
  //         setIsLoading(false);
  //       }
  //     })
  //     .catch((e) => {
  //       setData("Error fetching data. Try again after some time.");
  //       setIsLoading(false);
  //     });
  // }, [indexTabActive])

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
      <div className="grid grid-cols-12 gap-5 my-7 font-bold relative">
        {indexTabActive === 1 ? (
          // ---SURAH---
          Array.isArray(data) && data.length > 0 ? (
            data.map((element, index) => (
              <SurahCard
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
          <div className="lg:col-span-4 sm:col-span-6 col-span-12 flex flex-col gap-5">
            <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
              <h4>Juz 1</h4>
              <p className="underline">
                <a href="#">Read Juz</a>
              </p>
            </div>
            <div className="flex flex-col">
              <SurahCard
                number={1}
                englishName={"English Name"}
                englishNameTranslation={"English Name Translation"}
                name={"Arabic title"}
                numberOfAyahs={10}
              />
            </div>
          </div>
        )}
      </div>
      {/* TAB CONTENT END */}
    </div>
  );
}
