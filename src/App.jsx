import { Outlet } from "react-router";
import NavbarSection from "./Components/Shared/NavbarSection";
import FooterSection from "./Components/Shared/FooterSection";

const App = () => {
  return (
    <div className="max-w-[1440px] w-full flex flex-col items-center h-screen mx-auto">
      <NavbarSection></NavbarSection>
      <div className="py-10"></div>
      <div className="w-full flex-1 bg-gray-100">
        <Outlet></Outlet>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
};

export default App;
