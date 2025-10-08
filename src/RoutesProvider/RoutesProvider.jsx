import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import RouteErrorPage from "../Components/ErrorPage/RouteErrorPage";
import HomePage from "../Components/Home/HomePage";
import AllAppsPage from "../Components/AllApps/AllAppsPage";
import AppDetails from "../Components/AppDetails/AppDetails";
import InstalledApp from "../Components/Installation/InstalledApp";

const RoutesProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <RouteErrorPage></RouteErrorPage>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          path: "/apps",
          element: <AllAppsPage></AllAppsPage>,
        },
        {
          path: "/app/:id",
          element: <AppDetails></AppDetails>,
        },
        {
          path: "/installation",
          element: <InstalledApp></InstalledApp>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default RoutesProvider;
