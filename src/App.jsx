import { Outlet } from "react-router";
import NavbarSection from "./Components/Shared/NavbarSection";
import FooterSection from "./Components/Shared/FooterSection";

const App = () => {
  return (
    <div className="max-w-[1440px] w-full flex flex-col items-center h-screen">
      <NavbarSection></NavbarSection>
      <div className="w-full flex-1">
        <Outlet></Outlet>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
};

export default App;
