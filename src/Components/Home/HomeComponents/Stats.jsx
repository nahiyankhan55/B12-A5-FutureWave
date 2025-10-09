const Stats = () => {
  return (
    <div className="w-full lg:px-14 md:px-10 px-5 lg:py-14 md:py-10 py-8 bg-gradient-to-l from-purple-600 via-purple-800 to-violet-900 text-center">
      <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-white">
        Trusted by Millions, Built for You
      </h2>
      <div className="w-full flex items-center gap-10 justify-evenly flex-wrap text-white my-5">
        <div>
          <span className="font-extralight md:text-2xl sm:text-xl text-lg">
            Total Downloads
          </span>
          <h3 className="font-bold text-2xl md:text-4xl sm:text-3xl lg:text-5xl">
            29.6M
          </h3>
          <p className="sm:text-lg text-base">21% more than last month</p>
        </div>
        <div>
          <span className="font-extralight md:text-2xl sm:text-xl text-lg">
            Total Reviews
          </span>
          <h3 className="font-bold text-2xl md:text-4xl sm:text-3xl lg:text-5xl">
            906K
          </h3>
          <p className="sm:text-lg text-base">46% more than last month</p>
        </div>
        <div>
          <span className="font-extralight md:text-2xl sm:text-xl text-lg">
            Active Apps
          </span>
          <h3 className="font-bold text-2xl md:text-4xl sm:text-3xl lg:text-5xl">
            132+
          </h3>
          <p className="sm:text-lg text-base">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
