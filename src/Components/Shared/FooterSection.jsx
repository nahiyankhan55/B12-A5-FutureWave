import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerLogo from "/logo.png";

const FooterSection = () => {
  return (
    <div className="md:px-16 sm:px-10 px-5 py-5 bg-gradient-to-l from-cyan-950 via-black to-purple-950 w-full">
      <div className="w-full border-b-2 border-gray-500 flex items-start gap-5 justify-between flex-wrap text-white py-5">
        <div>
          <h2 className="font-bold sm:text-2xl text-xl flex items-center gap-2">
            <img
              src={footerLogo}
              className="h-10 animate-pulse"
              alt="footer-logo"
            />
            FutureWave
          </h2>
          <p className="max-w-xs mt-2 text-gray-200">
            FutureWave is a modern app store offering innovative, user-friendly
            applications to enhance productivity, creativity, and digital
            experiences with seamless performance, reliability, and cutting-edge
            technology.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Company</h2>
          <ul className="flex flex-col items-start mt-3 text-gray-400 gap-1">
            <li>
              <a href="#" className="hover:text-white duration-300 font-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white duration-300 font-medium">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white duration-300 font-medium">
                Contact Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white duration-300 font-medium">
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Social Links</h2>
          <ul className="flex flex-col items-start mt-3 text-gray-400 gap-2">
            <li>
              <a
                href="http://twitter.com/"
                target="_blank"
                className="hover:text-white duration-300 font-medium flex items-center gap-1"
              >
                <FaTwitter></FaTwitter>@FutureWave
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="hover:text-white duration-300 font-medium flex items-center gap-1"
              >
                <FaLinkedin></FaLinkedin>@FutureWave
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="hover:text-white duration-300 font-medium flex items-center gap-1"
              >
                <FaFacebook></FaFacebook>@FutureWave
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/"
                target="_blank"
                className="hover:text-white duration-300 font-medium flex items-center gap-1"
              >
                <FaEnvelope></FaEnvelope>Admin@futurewave.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full py-5 text-center text-white">
        <p className="text-lg font-medium">
          ©FutureWave - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
