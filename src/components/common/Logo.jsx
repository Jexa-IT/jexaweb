import { memo } from "react";
import logo from "@/assets/logo.png";
import { scrollToSection } from "@/utils/scrollUtils";

const Logo = memo(() => (
  <div
    className="flex items-center gap-3 cursor-pointer"
    onClick={() => scrollToSection("hero")}
  >
    {/* <svg className="w-10 h-10" viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="250" cy="175" rx="230" ry="150" fill="none" stroke="#10b981" strokeWidth="25"/>
      <ellipse cx="250" cy="175" rx="180" ry="120" fill="none" stroke="#10b981" strokeWidth="20"/>
      <circle cx="250" cy="175" r="100" fill="none" stroke="#10b981" strokeWidth="20"/>
      <path d="M 220 175 L 240 195 L 260 155" fill="none" stroke="#10b981" strokeWidth="15" strokeLinecap="round"/>
      <path d="M 270 155 L 280 175 L 270 195" fill="none" stroke="#10b981" strokeWidth="15" strokeLinecap="round"/>
      <circle cx="285" cy="130" r="15" fill="#10b981"/>
      <path d="M 120 175 L 160 175 M 340 175 L 380 175" stroke="#10b981" strokeWidth="20" strokeLinecap="round"/>
      <path d="M 150 100 Q 120 175 150 250" fill="none" stroke="#10b981" strokeWidth="15"/>
      <path d="M 350 100 Q 380 175 350 250" fill="none" stroke="#10b981" strokeWidth="15"/>
    </svg> */}
    <div className="w-15">
      <img src={logo} alt="jexa" />
    </div>

    <span className="text-xl font-bold text-white hidden sm:block">JEXA</span>
  </div>
));

Logo.displayName = "Logo";

export default Logo;
