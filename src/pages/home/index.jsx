import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useFormState } from "@/hooks/useFormState";
import { scrollToSection } from "@/utils/scrollUtils";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const { formData, handleChange, handleSubmit, isSubmitting } = useFormState();

  return (
    <div className="relative">
      {/* Toast Container */}
      <Toaster />

      <HeroSection onNavigate={scrollToSection} />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection
        formData={formData}
        onFormChange={handleChange}
        onFormSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default Home;
