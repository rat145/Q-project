export default function HeroSection() {
  return (
    <main className="text-white md:pl-200px w-[50%] ml-[100px] h-[80%] flex flex-col justify-center">
      <div className="icon-box flex flex-row items-center">
        <img src="/assets/img/logo1.png" /> &nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="text-lg font-bold">ILMULISLAM</h1>
      </div>
      <div className="title-subtitle-container">
        <h2 className="text-5xl text-[#ecae46] font-extrabold leading-normal mb-4">
          Discover, Learn, and Connect with Islamic Knowledge
        </h2>
        <p className="text-lg font-normal leading-tight mb-5">
          Join a vibrant community of Muslims exploring credible sources of
          Quran and Hadith, Islamic history, and free courses. Ask questions,
          get expert answers, track Salah times, find the Qibla, calculate
          Zakat, and more—all in one place for free!
        </p>
      </div>
      <form className="p-0 m-0 flex flex-row w-full mb-5">
        <input
          type="text"
          placeholder="What are you looking for?"
          id="search-query"
          name="search-query"
          className="text-sm font-normal rounded-l py-3 pl-4 w-full text-slate-700"
        />
        <button
          type="submit"
          className="bg-[#ecae46] rounded-r font-bold text-lg px-[50px] search-button"
        >
          Search
        </button>
      </form>
      <div className="trending-row flex flex-row items-center">
        <span className="font-semibold text-sm text-slate-400">Trending:</span>
        <ul className="font-semibold text-sm flex flex-row w-[80%] justify-evenly">
          <li className="trending-list-item border-2 rounded-3xl px-4 py-2">
            Sahih Bukhari
          </li>
          <li className="trending-list-item border-2 rounded-3xl px-4 py-2">
            Sureh Baqarah
          </li>
          <li className="trending-list-item border-2 rounded-3xl px-4 py-2">
            Salah tracker
          </li>
          <li className="trending-list-item border-2 rounded-3xl px-4 py-2">
            Arabic course
          </li>
        </ul>
      </div>
    </main>
  );
}
