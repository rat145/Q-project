import SurahCard from "../SurahCard";

export default function JuzIndex({ data }) {
  return (
    <>
      {/* col 1 */}
      <div className="lg:col-span-4 sm:col-span-6 col-span-12 flex flex-col gap-4">
        {/* Juz 1 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 1</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number <= 2)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 2 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 2</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number === 2)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 3 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 3</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 2 && surah.number <= 3)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 4 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 4</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 3 && surah.number <= 4)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 5 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 5</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number === 4)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 6 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 6</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 4 && surah.number <= 5)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 7 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 7</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 5 && surah.number <= 6)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 8 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 8</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 6 && surah.number <= 7)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 9 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 9</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 7 && surah.number <= 8)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 10 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 10</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 8 && surah.number <= 9)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 11 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 11</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 9 && surah.number <= 11)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 12 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 12</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 11 && surah.number <= 12)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 13 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 13</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 12 && surah.number <= 14)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 14 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 14</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 15 && surah.number <= 16)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 15 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 15</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 17 && surah.number <= 18)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 16 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 16</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 18 && surah.number <= 20)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 17 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 17</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 21 && surah.number <= 22)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 18 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 18</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 23 && surah.number <= 25)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 19 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 19</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 25 && surah.number <= 27)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
      </div>
      {/* col 2 */}
      <div className="lg:col-span-4 sm:col-span-6 col-span-12 flex flex-col gap-4">
        {/* Juz 20 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 20</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 27 && surah.number <= 29)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 21 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 21</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 29 && surah.number <= 33)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 22 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 22</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 33 && surah.number <= 36)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 23 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 23</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 36 && surah.number <= 39)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 24 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 24</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 39 && surah.number <= 41)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 25 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 25</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 41 && surah.number <= 45)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 26 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 26</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 46 && surah.number <= 51)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 27 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 27</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 51 && surah.number <= 57)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 28 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 28</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 58 && surah.number <= 66)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
      </div>
      {/* col 3 */}
      <div className="lg:col-span-4 sm:col-span-6 col-span-12 flex flex-col gap-4">
        {/* Juz 29 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 29</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 67 && surah.number <= 77)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
        {/* Juz 30 */}
        <div className="lg:text-[16px] sm:text-[14px] text-[11px] font-normal flex justify-between">
          <h4>Juz 30</h4>
          <p className="underline">
            <a href="#">Read Juz</a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((surah) => surah.number >= 78 && surah.number <= 114)
              .map((surah) => (
                <SurahCard
                  number={surah.number}
                  englishName={surah.englishName}
                  englishNameTranslation={surah.englishNameTranslation}
                  name={surah.name}
                  numberOfAyahs={surah.numberOfAyahs}
                />
              ))}
        </div>
      </div>
    </>
  );
}
