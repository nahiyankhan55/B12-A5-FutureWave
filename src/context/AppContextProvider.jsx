import { useEffect, useState } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";

const AppContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);

  // Downloaded Apps Management
  const [downloaded, setDownloaded] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("downloaded")) || [];
    } catch {
      return [];
    }
  });

  // Save in localStorage
  useEffect(() => {
    localStorage.setItem("downloaded", JSON.stringify(downloaded));
  }, [downloaded]);

  const contextNames = {
    loader,
    setLoader,
    downloaded,
    setDownloaded,
  };

  return (
    <AppContext.Provider value={contextNames}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
