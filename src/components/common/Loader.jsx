
import logo from "@/assets/logo.png";
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo with animation */}
        <div className="relative">
          {/* Spinning ring */}
          <div className="absolute inset-0 w-32 h-32 border-4 border-emerald-500/20 rounded-full animate-spin"></div>
          <div className="absolute inset-2 w-28 h-28 border-4 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
          
          {/* Center logo */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="w-15">
                 <img src={logo} alt="jexa" />
               </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold text-white animate-pulse">Jexa</h2>
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-emerald-500/20 to-transparent blur-2xl"></div>
    </div>
  );
};

export default Loader;