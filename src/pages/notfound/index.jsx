import { Home } from 'lucide-react';

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/10 via-teal-500/5 to-transparent animate-pulse"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-400 to-emerald-600 tracking-tight">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={handleGoHome}
            className="group px-10 py-4 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default NotFound;
