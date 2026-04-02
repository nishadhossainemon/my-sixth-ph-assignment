import React from "react";

const StatsBar = () => {
  return (
    <>
      <div className="bg-purple-600 text-white flex flex-wrap justify-center items-center py-10 md:py-12 px-4">
        <div className="flex flex-row justify-center items-center gap-8 sm:gap-12 md:gap-20 flex-wrap">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold">50K+</h3>
            <p className="text-purple-200 mt-2 text-base md:text-lg font-semibold">Active Users</p>
          </div>
          <div className="h-12 md:h-16 w-[1px] bg-purple-400 hidden sm:block"></div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold">200+</h3>
            <p className="text-purple-200 mt-2 text-base md:text-lg font-semibold">Premium Tools</p>
          </div>
          <div className="h-12 md:h-16 w-[1px] bg-purple-400 hidden sm:block"></div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold">4.9</h3>
            <p className="text-purple-200 mt-2 text-base md:text-lg font-semibold">Rating</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsBar;
