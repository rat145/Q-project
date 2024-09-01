export default function HeroSection() {
  return (
    <main className="text-white md:pl-200px lg:w-[50%] w-[90%] lg:ml-[100px] ml-[20px] h-[80%] flex flex-col justify-center">
      <div className="icon-box flex flex-row items-center">
        <img src="/assets/img/logo1.png" /> &nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="lg:text-lg md:text-base font-bold">ILMULISLAM</h1>
      </div>
      <div className="title-subtitle-container">
        <h2 className="lg:text-5xl md:text-4xl text-3xl text-[#ecae46] font-extrabold md:leading-normal leading-snug mb-4">
          Discover, Learn, and Connect with Islamic Knowledge
        </h2>
        <p className="lg:text-lg text-base font-normal leading-tight lg:mb-5 mb-10">
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
          className="text-sm font-normal rounded-l lg:py-3 py-2 lg:pl-4 pl-3 w-full text-slate-700"
        />
        <button
          type="submit"
          className="bg-[#ecae46] rounded-r font-bold lg:text-lg text-base px-[50px] search-button"
        >
          Search
        </button>
      </form>
      <div className="trending-row flex md:flex-row flex-col md:items-center items-start">
        <span className="font-semibold lg:text-sm text-xs text-slate-400 md:mb-0 mb-2">
          Trending:
        </span>
        <ul className="font-semibold lg:text-sm md:text-xs text-[10px] flex flex-row md:w-[80%] w-[100%] md:justify-evenly">
          <li className="trending-list-item border-2 rounded-3xl lg:px-4 md:px-3 md:py-2 p-1 md:mr-0 mr-2">
            Sahih Bukhari
          </li>
          <li className="trending-list-item border-2 rounded-3xl lg:px-4 md:px-3 md:py-2 p-1 md:mr-0 mr-2">
            Sureh Baqarah
          </li>
          <li className="trending-list-item border-2 rounded-3xl lg:px-4 md:px-3 md:py-2 p-1 md:mr-0 mr-2">
            Salah tracker
          </li>
          <li className="trending-list-item border-2 rounded-3xl lg:px-4 md:px-3 md:py-2 p-1 md:mr-0 mr-2">
            Arabic course
          </li>
        </ul>
      </div>
    </main>
  );
}
