import NavbarSection from "../Shared/NavbarSection";
import FooterSection from "../Shared/FooterSection";

const RouteErrorPage = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <NavbarSection></NavbarSection>
      <div className="flex-1">RouteErrorPage</div>
      <FooterSection></FooterSection>
    </div>
  );
};

export default RouteErrorPage;
