import Header from "./HomeComponents/Header";
import HomeApps from "./HomeComponents/HomeApps";
import Stats from "./HomeComponents/Stats";

const HomePage = () => {
  return (
    <div className="w-full">
      <Header></Header>
      <Stats></Stats>
      <HomeApps></HomeApps>
    </div>
  );
};

export default HomePage;
