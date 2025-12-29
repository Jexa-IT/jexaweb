import  { memo, useState, useCallback } from "react";
import Logo from "@/components/common/Logo";
import { MENU_ITEMS } from "@/constants";

const Header = memo(({ currentSection, isScrolled, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = useCallback(
    (id) => {
      onNavigate(id);
      setMobileMenuOpen(false);
    },
    [onNavigate]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-2xl shadow-emerald-500/20" : ""
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-lg border-b border-emerald-500/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-3">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={` px-5 py-2.5 rounded-full font-medium transition-all ${
                  currentSection === item.id
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/50 scale-105"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-lg border-t border-emerald-500/30">
            <nav className="flex flex-col p-4 gap-2">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all text-left ${
                    currentSection === item.id
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
