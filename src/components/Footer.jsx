import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#0f1623] text-white px-8 md:px-35 pt-20 pb-12">
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
        <div className="max-w-xs">
          <h2 className="text-3xl font-extrabold text-white mb-4">DigiTools</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <div>
            <h4 className="text-base font-semibold text-white mb-5">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Templates", "Integrations"].map(
                (item) => (
                  <li key={item}>
                    <span
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <span
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {["Documentation", "Help Center", "Community", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <span
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-5">
              Social Links
            </h4>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#1e2736] flex items-center justify-center hover:bg-[#2a3547] transition-colors duration-200">
                <AiFillInstagram />
              </span>
              <span className="w-10 h-10 rounded-full bg-[#1e2736] flex items-center justify-center hover:bg-[#2a3547] transition-colors duration-200">
                <FaFacebook></FaFacebook>
              </span>

              <span
                className="w-10 h-10 rounded-full bg-[#1e2736] flex items-center justify-center hover:bg-[#2a3547] transition-colors duration-200"
              >
                <FaSquareXTwitter></FaSquareXTwitter>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mb-6" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © 2026 Digitools. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
            <span
              key={item}
              className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
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
