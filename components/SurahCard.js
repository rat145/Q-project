export default function SurahCard({
  number,
  englishName,
  englishNameTranslation,
  name,
  numberOfAyahs,
}) {
  return (
    <div className="qIndexCard flex justify-start items-center lg:col-span-4 sm:col-span-6 col-span-12 rounded border border-[#ECAE46] sm:py-5 py-4 pl-5 sm:pr-10 pr-5 cursor-pointer">
      <div className="flex flex-col w-[20%]">
        <div className="qIndexNumBox border border-[#ECAE46] h-[40px] w-[40px] rotate-45 flex justify-center items-center rounded">
          <p className="qIndexSubtitle text-[#272727] rotate-[-45deg] md:text-sm text-xs">
            {number}
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[50%] text-wrap">
        <h4 className="text-[#272727] sm:text-base text-sm">{englishName}</h4>
        <p className="qIndexSubtitle text-[#666666] sm:text-xs text-[10px]">
          {englishNameTranslation}
        </p>
      </div>
      <div className="flex flex-col w-[30%] text-wrap">
        <p className="text-[#272727] sm:text-base text-sm text-right font-normal">
          {name}
        </p>
        <p className="qIndexSubtitle text-[#666666] sm:text-xs text-[10px] text-right">
          {numberOfAyahs} Ayahs
        </p>
      </div>
    </div>
  );
}
