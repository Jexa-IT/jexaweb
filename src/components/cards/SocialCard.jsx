import { memo } from "react";
import { getWhatsAppURL } from "@/utils/whatsappUtils";

const SocialCard = memo(({ Icon, title, desc, link }) => {
  const handleClick = (e) => {
    // If it's WhatsApp, add pre-filled message
    if (title === "WhatsApp") {
      e.preventDefault();
      const whatsappURL = getWhatsAppURL(); // Uses default message
      window.open(whatsappURL, "_blank");
    }
  };
  return (
    <a
      href={link}
      target="_blank"
      onClick={handleClick}
      rel="noopener noreferrer"
      className="flex-1 flex  bg-slate-900/80 backdrop-blur-lg rounded-2xl border border-emerald-500/30 p-8 hover:scale-105 hover:border-emerald-500 transition-all cursor-pointer hover:shadow-[0_8px_30px_rgba(16,185,129,0.4)]"
    >
      <div className="flex items-center gap-4">
        <Icon className="w-8 h-8 text-emerald-400 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400">{desc}</p>
        </div>
      </div>
    </a>
  );
});

SocialCard.displayName = "SocialCard";

export default SocialCard;
