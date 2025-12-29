import { Outlet } from "react-router-dom";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { MENU_ITEMS } from "@/constants";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MagicalScene from "@/components/three/MagicalScene";
import { scrollToSection } from "@/utils/scrollUtils";

const MainLayout = () => {
  const sections = MENU_ITEMS.map((item) => item.id);
  const { currentSection, isScrolled } = useScrollTracking(sections);

  return (
    <>
      {/* MagicalScene stays mounted and just changes type */}
      <MagicalScene type={currentSection} />
      
      <Header
        currentSection={currentSection}
        isScrolled={isScrolled}
        onNavigate={scrollToSection}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;