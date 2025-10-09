import { useContext } from "react";
import useFetchingApps from "../../../hooks/useFetchingApps";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import AppContext from "../../../context/AppContext";
import { FaCloudDownloadAlt, FaInfoCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const HomeApps = () => {
  const { data, errorMessage } = useFetchingApps();
  const { loader } = useContext(AppContext);
  const homeData = data.slice(0, 8);

  return (
    <div className="w-full lg:px-14 md:px-10 px-5 py-10 text-center flex flex-col gap-5">
      {/* title */}
      <div className="text-center">
        <h2 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-gray-900">
          Trending Apps
        </h2>
        <p className="text-gray-600 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loader ? (
        <LoadingSpinner></LoadingSpinner>
      ) : errorMessage ? (
        <p className="flex items-center gap-1 py-20 text-center text-red-700">
          <FaInfoCircle></FaInfoCircle> {errorMessage?.message}-
          {errorMessage?.status}
        </p>
      ) : (
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {homeData.map((app) => (
            <Link
              to={`/app/${app.id}`}
              key={app.id}
              className="p-4 rounded-xl bg-white flex flex-col gap-2 duration-300 transition hover:scale-x-105 hover:shadow-md"
            >
              <img
                className="w-full rounded-md h-60 bg-gray-300 border-1 shadow-md object-cover"
                src={app?.image}
                alt={app?.title}
              />
              <h3 className="md:text-xl text-lg font-bold text-gray-900">
                {app?.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="bg-teal-100 rounded-sm text-teal-700 sm:text-base text-sm font-medium flex items-center gap-1 py-1 px-2">
                  <FaCloudDownloadAlt></FaCloudDownloadAlt>
                  {(app?.downloads / 1000000).toFixed(2)}M
                </span>
                <span className="bg-orange-100 rounded-sm text-orange-700 sm:text-base text-sm font-medium flex items-center gap-1 py-1 px-2">
                  {app?.ratingAvg}
                  <FaStar></FaStar>
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
      <Link className="text-lg font-bold text-white bg-gradient-to-l from-purple-500 to-purple-800 py-2 px-6 mx-auto rounded-lg hover:from-indigo-700 transition duration-300 hover:shadow-md">
        Show All
      </Link>
    </div>
  );
};

export default HomeApps;
