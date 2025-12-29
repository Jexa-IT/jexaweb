export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const getCurrentSection = (sections) => {
  const scrollPos = window.scrollY + window.innerHeight / 2;
  
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        return section;
      }
    }
  }
  return sections[0];
};

export const checkScrolled = () => {
  return window.scrollY > 50;
};
