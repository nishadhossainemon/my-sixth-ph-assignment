import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ selectedCards }) => {
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-purple-700">DigiTools</h1>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 font-semibold text-[#101727]">
              <li><span>Products</span></li>
              <li><span>Features</span></li>
              <li><span>Pricing</span></li>
              <li><span>Testimonials</span></li>
              <li><span>FAQ</span></li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Cart Icon */}
            <div className="flex items-center justify-center relative">
              <IoCartOutline className="h-6 w-6" />
              {selectedCards.length !== 0 ? (
                <div className="text-white bg-red-500 w-5 h-5 flex items-center justify-center rounded-full absolute left-3.5 bottom-3 text-xs">
                  {selectedCards.length}
                </div>
              ) : null}
            </div>

            <span className="text-sm font-bold hidden sm:block">Login</span>

            <button
              type="button"
              className="btn btn-primary bg-purple-600 border-none rounded-full px-4 md:px-6 text-white text-sm"
            >
              Get Started
            </button>

            {/* Hamburger - Mobile Only */}
            <div className="dropdown dropdown-end md:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm px-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white rounded-box w-52 font-semibold text-[#101727] gap-1"
              >
                <li><span className="py-2">Products</span></li>
                <li><span className="py-2">Features</span></li>
                <li><span className="py-2">Pricing</span></li>
                <li><span className="py-2">Testimonials</span></li>
                <li><span className="py-2">FAQ</span></li>
                <li className="sm:hidden mt-2 border-t pt-2">
                  <span className="py-2">Login</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
