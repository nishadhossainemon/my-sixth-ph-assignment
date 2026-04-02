import { IoCartOutline } from "react-icons/io5";

const Navbar = ({selectedCards}) => {
  return (
    <>
      <nav className="flex justify-around items-center py-4 bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-purple-700">DigiTools</h1>
        <div>
          <ul className="flex items-center gap-8 font-semibold text-[#101727]">
            <li>
              <span>Products</span>
            </li>
            <li>
              <span>Features</span>
            </li>
            <li>
              <span >Pricing</span>
            </li>
            <li>
              <span >Testimonials</span>
            </li>
            <li>
              <span >FAQ</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center relative">
             <IoCartOutline className="h-6 w-6"></IoCartOutline>
            {selectedCards.length !== 0 ? <div className="text-white bg-red-500 w-5.5 h-5.5 flex items-center justify-center rounded-full absolute left-3.5 bottom-3 text-sm">{selectedCards.length}</div> : null}
          </div>
          <span href="#" className="text-sm font-bold">
            Login
          </span>
          <button type="button" className="btn btn-primary bg-purple-600 border-none rounded-full px-6 text-white">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
