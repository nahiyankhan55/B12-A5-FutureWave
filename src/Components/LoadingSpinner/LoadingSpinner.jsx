import spinnerLogo from "/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="w-full h-full py-20 flex flex-col items-center">
      <img
        src={spinnerLogo}
        alt="logoLoader"
        className="h-20 w-20 animate-spin"
      />
      <h2 className="text-3xl font-bold animate-pulse text-sky-700 mt-3">
        Loading...
      </h2>
    </div>
  );
};

export default LoadingSpinner;
