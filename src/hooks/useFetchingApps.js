import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

const useFetchingApps = () => {
  const { setLoader } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const res = await fetch("/applications.json");
        const result = await res.json();
        setData(result);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setTimeout(() => {
          setLoader(false);
        }, 1200);
      }
    };

    fetchData();
  }, [setLoader]);

  return { data, errorMessage };
};

export default useFetchingApps;
