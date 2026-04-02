import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-18 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="flex gap-2 bg-purple-100 text-purple-600 px-4 py-3 rounded-full text-xs font-bold uppercase tracking-wider max-w-xs mx-auto md:mx-0">
            <img src="/Group 5.png" alt="" />
            <h3>New: AI-Powered Tools Available</h3>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 leading-tight text-slate-900">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-gray-500 mt-6 text-base md:text-lg max-w-lg leading-relaxed mx-auto md:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">
            <button
              type="button"
              className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 border-none"
            >
              Explore Products
            </button>
            <button
              type="button"
              className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full px-6"
            >
              <IoPlayOutline /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end w-full">
          <div className="p-4 pr-2 rounded-4xl w-full max-w-sm md:max-w-full">
            <img
              src="/banner.png"
              alt="Hero"
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
