import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f1623] text-white px-6 sm:px-10 md:px-20 lg:px-35 pt-14 md:pt-20 pb-10 md:pb-12">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-12 mb-10 md:mb-12">
        {/* Brand */}
        <div className="max-w-xs">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">DigiTools</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="text-base font-semibold text-white mb-4 md:mb-5">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Templates", "Integrations"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4 md:mb-5">Company</h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4 md:mb-5">Resources</h4>
            <ul className="space-y-3">
              {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4 md:mb-5">Social Links</h4>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#1e2736] flex items-center justify-center hover:bg-[#2a3547] transition-colors duration-200 cursor-pointer">
                <AiFillInstagram />
              </span>
              <span className="w-10 h-10 rounded-full bg-[#1e2736] flex items-center justify-center hover:bg-[#2a3547] transition-colors duration-200 cursor-pointer">
                <FaFacebook />
              </span>
              <span className="w-10 h-10 rounded-full bg-[#1e2736] flex items-center justify-center hover:bg-[#2a3547] transition-colors duration-200 cursor-pointer">
                <FaSquareXTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mb-6" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 text-center sm:text-left">
          © 2026 Digitools. All rights reserved.
        </p>
        <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
            <span
              key={item}
              className="text-sm text-gray-500 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
