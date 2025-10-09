import { IoLogoGooglePlaystore } from "react-icons/io5";
import heroImg from "./../../../assets/hero.png";
import { FaApple } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="pt-10 flex items-center flex-col gap-3 lg:px-14 md:px-10 px-5">
      <div>
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-800 text-center font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-400 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="max-w-4xl text-center text-gray-600 mt-3">
          At FutureWave, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex items-center gap-3 justify-center">
        <a
          className="py-2 sm:px-4 px-3 rounded-md flex items-center gap-1 font-semibold sm:text-lg text-xs text-gray-600 hover:text-teal-700 hover:scale-105 duration-300  hover:bg-teal-50 transition border-2"
          href="https://play.google.com/store/games?device=windows"
          target="_blank"
        >
          <IoLogoGooglePlaystore className="sm:text-xl text-lg"></IoLogoGooglePlaystore>
          Play Store
        </a>
        <a
          className="py-2 sm:px-4 px-3 rounded-md flex items-center gap-1 font-semibold sm:text-lg text-xs text-gray-600 hover:text-black hover:scale-105 duration-300 hover:bg-gray-50 transition border-2"
          href="https://github.com/nahiyankhan55"
          target="_blank"
        >
          <FaApple className="sm:text-xl text-lg"></FaApple>
          Contribution
        </a>
      </div>
      <div className="max-w-3xl">
        <img className="w-full" src={heroImg} alt="heroImg" />
      </div>
    </div>
  );
};

export default Header;
