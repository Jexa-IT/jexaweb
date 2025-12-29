import { useState, useEffect } from 'react';
import { getCurrentSection, checkScrolled } from '@/utils/scrollUtils';

export const useScrollTracking = (sections) => {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentSection(getCurrentSection(sections));
      setIsScrolled(checkScrolled());
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return { currentSection, isScrolled };
};