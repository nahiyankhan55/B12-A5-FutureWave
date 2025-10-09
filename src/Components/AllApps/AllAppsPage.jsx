import { useContext, useEffect, useState } from "react";
import useFetchingApps from "../../hooks/useFetchingApps";
import AppContext from "../../context/AppContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { FaCloudDownloadAlt, FaInfoCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa6";
import NotFound from "../ErrorPage/NotFound";

const AllAppsPage = () => {
  const { data, errorMessage } = useFetchingApps();
  const { loader, setLoader } = useContext(AppContext);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) setFilteredData(data);
  }, [data]);

  const searchFunc = (query) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
    if (!query.trim()) {
      setFilteredData(data);
      return;
    }

    const regex = new RegExp(query, "i"); // "i" = case-insensitive
    const filtered = data.filter((app) => regex.test(app.title));
    setFilteredData(filtered);
  };

  return (
    <div className="w-full lg:px-14 md:px-10 px-5 py-10 text-center flex flex-col gap-5">
      {/* title */}
      <div className="text-center">
        <h2 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-gray-900">
          Our All Applications
        </h2>
        <p className="text-gray-600 mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center gap-5 flex-wrap justify-between">
        <h2 className="text-xl font-bold text-gray-800">
          ({filteredData.length}) Apps Found
        </h2>
        <div className="flex items-center gap-1 border pl-2 rounded-lg bg-white overflow-hidden">
          <label htmlFor="search">
            <FaSearch></FaSearch>
          </label>
          <input
            id="search"
            name="search"
            className="py-1 px-2 bg-white outline-0 placeholder:text-gray-600 text-black min-w-40"
            type="text"
            placeholder="Search"
            onChange={(e) => searchFunc(e.target.value)}
          />
        </div>
      </div>
      {loader ? (
        <LoadingSpinner></LoadingSpinner>
      ) : errorMessage ? (
        <p className="flex items-center gap-1 py-20 text-center text-red-700">
          <FaInfoCircle></FaInfoCircle> {errorMessage?.message}-
          {errorMessage?.status}
        </p>
      ) : filteredData.length > 0 ? (
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {filteredData.map((app) => (
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
              <h3 className="md:text-xl text-lg font-bold text-gray-900 w-full text-left">
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
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
};

export default AllAppsPage;
