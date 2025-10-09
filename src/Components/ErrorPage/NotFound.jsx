import notFoundImg from "./../../assets/App-Error.png";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center w-full gap-2 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <img className="w-full" src={notFoundImg} alt="not-found" />
      </div>
      <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-gray-900 mt-5">
        OPPS!!! APP NOT FOUND
      </h2>
      <p className="text-gray-600 mt-2">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link
        to={"/"}
        className="text-lg font-bold text-white bg-gradient-to-l from-purple-500 to-purple-800 py-2 px-6 mx-auto rounded-lg hover:from-indigo-700 transition duration-300 hover:shadow-md"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default NotFound;
