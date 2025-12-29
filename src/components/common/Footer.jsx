const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-gray-400 bg-slate-900/80 backdrop-blur-lg border-t border-emerald-500/30">
      <p>&copy; {year} Jexa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
