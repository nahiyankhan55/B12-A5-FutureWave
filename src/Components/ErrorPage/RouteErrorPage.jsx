import NavbarSection from "../Shared/NavbarSection";
import FooterSection from "../Shared/FooterSection";
import errorImg from "./../../assets/error-404.png";
import { Link } from "react-router";

const RouteErrorPage = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full max-w-[1440px] mx-auto">
      <NavbarSection></NavbarSection>
      <div className="flex-1">
        <div className="flex flex-col items-center w-full gap-2 py-20 text-center mt-10 px-5">
          <div className="max-w-2xl mx-auto">
            <img className="w-full" src={errorImg} alt="error-page" />
          </div>
          <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-gray-900 mt-5">
            Oops, page not found!
          </h2>
          <p className="text-gray-600 mt-2">
            The page you are looking for is not available.
          </p>
          <Link
            to={"/"}
            className="text-lg font-bold text-white bg-gradient-to-l from-purple-500 to-purple-800 py-2 px-6 mx-auto rounded-lg hover:from-indigo-700 transition duration-300 hover:shadow-md"
          >
            Go Back!
          </Link>
        </div>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
};

export default RouteErrorPage;
