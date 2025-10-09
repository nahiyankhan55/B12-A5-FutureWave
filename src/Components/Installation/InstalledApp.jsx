import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { FaDownload, FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Link } from "react-router";

const InstalledApp = () => {
  const { downloaded, setDownloaded } = useContext(AppContext);
  const [sortedData, setSortedData] = useState(downloaded);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    let sorted = [...downloaded];
    if (sortType === "highlow") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (sortType === "lowhigh") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    setSortedData(sorted);
  }, [sortType, downloaded]);

  const uninstallFunc = (app) => {
    const updatedList = downloaded.filter((item) => item.id !== app.id);
    setDownloaded(updatedList);
    toast.warn(`${app.title} Uninstalled Successfully!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="w-full lg:px-14 md:px-10 px-5 py-10 text-center flex flex-col gap-5">
      {/* title */}
      <div className="text-center">
        <h2 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-gray-900">
          Your Installed Apps
        </h2>
        <p className="text-gray-600 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex items-center gap-5 flex-wrap justify-between">
        <h2 className="text-xl font-bold text-gray-800">
          ({sortedData.length}) Apps Found
        </h2>
        <div className="flex items-center gap-1 border pl-2 rounded-lg bg-white overflow-hidden">
          <select
            className="py-1 px-2 bg-white outline-0 placeholder:text-gray-600 text-black min-w-40"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By Size</option>
            <option value="lowhigh">Low to High</option>
            <option value="highlow">High to Low</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-5">
        {downloaded.length > 0 ? (
          sortedData.map((app) => (
            <div
              key={app.id}
              className="w-full p-3 rounded-lg bg-white shadow-lg flex items-center justify-between gap-3 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <Link to={`/app/${app.id}`}>
                  <img
                    className="h-14 w-14 rounded-md bg-gray-300 shadow-md"
                    src={app?.image}
                    alt={app?.title}
                  />
                </Link>
                <div className="flex flex-col justify-between items-start h-full gap-1">
                  <h3 className="text-lg font-bold text-gray-800">
                    {app?.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="flex items-center gap-1 font-medium text-teal-500">
                      <FaDownload></FaDownload>
                      {(app?.downloads / 1000000).toFixed()}M
                    </p>
                    <p className="flex items-center gap-1 font-medium text-orange-500">
                      <FaStar></FaStar>
                      {app?.ratingAvg}
                    </p>
                    <p className="flex items-center gap-1 font-medium text-gray-500">
                      <FaDownload></FaDownload>
                      {app?.size} MB
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => uninstallFunc(app)}
                className="py-2 px-4 font-medium text-base bg-gradient-to-br from-teal-700 via-teal-600 to-teal-400 text-white hover:to-red-700 duration-300 cursor-pointer transition rounded-md"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className="text-lg text-center font-medium text-orange-700 py-10">
            You have not install any apps yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default InstalledApp;
