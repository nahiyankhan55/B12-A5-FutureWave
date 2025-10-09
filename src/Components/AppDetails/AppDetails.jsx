import { useContext } from "react";
import useFetchingApps from "../../hooks/useFetchingApps";
import AppContext from "../../context/AppContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router";
import NotFound from "../ErrorPage/NotFound";
import downloadLogo from "./../../assets/icon-downloads.png";
import starLogo from "./../../assets/icon-ratings.png";
import reviewLogo from "./../../assets/icon-review.png";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AppDetails = () => {
  const { data } = useFetchingApps();
  const { loader, downloaded, setDownloaded } = useContext(AppContext);
  const { id } = useParams();

  const alreadyInstalled = downloaded.some((app) => app.id == id);

  console.log(alreadyInstalled);

  const app = data.find((app) => app.id == id);
  console.log(app);

  const InstallApp = () => {
    if (alreadyInstalled) {
      return toast.info(`${app.title} already installed!`, {
        draggable: true,
        autoClose: 2000,
      });
    }
    setDownloaded((prev) => [...prev, app]);
    toast.success(`${app.title} installed successfully!`, {
      draggable: true,
      autoClose: 2000,
    });
  };

  if (loader) return <LoadingSpinner></LoadingSpinner>;
  if (!app) return <NotFound></NotFound>;
  return (
    <div className="w-full lg:px-14 md:px-10 px-6 py-10">
      <div className="grid sm:grid-cols-3 grid-cols-1 py-5 border-b-2 border-gray-500 justify-between w-full md:gap-10 gap-5 items-center">
        <div className="col-span-1 max-w-lg w-full sm:ml-0 mx-auto">
          <img
            className="w-full h-60 rounded-xl shadow-lg shadow-gray-400"
            src={app?.image}
            alt={app?.title}
          />
        </div>
        <div className="sm:col-span-2 col-span-1 w-full flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            {app?.title}
          </h2>
          <h3 className="text-lg text-gray-700 font-normal">
            Developed By{" "}
            <span className="text-purple-700 font-semibold">
              {app?.companyName}
            </span>
          </h3>
          <div className="w-full border-b-2 border-gray-500"></div>
          <div className="flex gap-10 items-start flex-wrap">
            <div className="flex flex-col gap-2">
              <img
                className="h-8 w-8"
                src={downloadLogo}
                alt="Downloads-logo"
              />
              <p className="text-gray-500 font-medium">Downloads</p>
              <h4 className="text-3xl font-bold text-gray-800">
                {(app?.downloads / 1000000).toFixed()}M
              </h4>
            </div>
            <div className="flex flex-col gap-2">
              <img className="h-8 w-8" src={starLogo} alt="ratings-logo" />
              <p className="text-gray-500 font-medium">Avg. Ratings</p>
              <h4 className="text-3xl font-bold text-gray-800">
                {app?.ratingAvg}
              </h4>
            </div>
            <div className="flex flex-col gap-2">
              <img className="h-8 w-8" src={reviewLogo} alt="Downloads-logo" />
              <p className="text-gray-500 font-medium">Reviews</p>
              <h4 className="text-3xl font-bold text-gray-800">
                {(app?.reviews / 1000).toFixed()}K
              </h4>
            </div>
          </div>
          <button
            onClick={InstallApp}
            disabled={alreadyInstalled}
            className={`w-fit text-white text-lg font-medium py-2 px-4 rounded bg-gradient-to-r ${
              alreadyInstalled
                ? "from-green-700 to-teal-900"
                : "from-teal-700 to-teal-400"
            } via-teal-600 to-teal-400 hover:to-teal-900 duration-300 hover:shadow-lg transition cursor-pointer`}
          >
            {alreadyInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-5 py-5 border-b-2 border-gray-600">
        <h5 className="text-xl font-bold text-gray-800">Ratings</h5>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...(app?.ratings || [])].reverse()}
              layout="vertical"
              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fontSize: 14, fill: "#333" }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#e07b07" barSize={20} radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 py-5">
        <h5 className="text-xl font-bold text-gray-800">Description</h5>
        <p className="text-gray-600 lg:text-lg">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
