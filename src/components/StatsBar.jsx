import React from "react";

const StatsBar = () => {
  return (
    <>
      <div className="bg-purple-600 text-white flex flex-wrap justify-center items-center py-12">
        <div className="flex justify-between items-center gap-20">
           <div className="">
          <h3 className="text-5xl font-bold">50K+</h3>
          <p className="text-purple-200 mt-2 text-lg font-semibold">Active Users</p>
        </div>
        <div className="h-16 w-[1px] bg-purple-400 hidden md:block"></div>
        <div>
          <h3 className="text-5xl font-bold">200+</h3>
          <p className="text-purple-200 mt-2 text-lg font-semibold">Premium Tools</p>
        </div>
        <div className="h-16 w-[1px] bg-purple-400 hidden md:block"></div>
        <div>
          <h3 className="text-5xl font-bold">4.9</h3>
          <p className="text-purple-200 mt-2 text-lg ml-0.75 font-semibold">Rating</p>
        </div>
      </div>
        </div>
    </>
  );
};

export default StatsBar;
