import { IoPlayOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <>
      <div className=" container mx-auto px-18.75 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <div className="flex gap-2 bg-purple-100 text-purple-600 px-4 py-3 rounded-full text-xs font-bold uppercase tracking-wider max-w-75">
            <img src="/Group 5.png" alt="" />
            <h3>New: AI-Powered Tools Available</h3>
          </div>
          <h1 className="text-6xl font-extrabold mt-6 leading-tight text-slate-900">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-gray-500 mt-6 text-lg max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place.
          </p>
          <div className="mt-8 flex gap-4">
            <button type="button" className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 border-none">
              Explore Products
            </button>
            <button type="button" className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full px-6">
             <IoPlayOutline /> Watch Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end">
          <div className="p-4 pr-2 rounded-4xl">
            <img 
              src="/banner.png"
              alt="Hero"
              className="rounded-2xl max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
