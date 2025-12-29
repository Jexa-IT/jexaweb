export default function NewYearLaunch({ timeLeft }) {
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-br from-emerald-950 via-slate-950 to-black 
      text-slate-100 px-6 text-center">

      {/* Brand */}
      <p className="text-sm tracking-[0.3em] uppercase mb-6 text-emerald-400">
        Jexa Infotech
      </p>

      {/* Emojis */}
      <div className="flex gap-6 text-4xl mb-6">
        <span className="animate-bounce">🎉</span>
        <span className="animate-bounce delay-200">🚀</span>
        <span className="animate-bounce">🎉</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        A New Year. A New Vision.
      </h1>

      <p className="mt-4 max-w-md text-slate-300">
        Jexa Infotech is unveiling something special as the clock strikes midnight.  
        Let’s begin <span className="text-emerald-400 font-semibold">2026</span> together.
      </p>

      {/* Countdown */}
      <div className="flex gap-3 sm:gap-5 mt-10">
        <TimeBox label="Days" value={days} />
        <TimeBox label="Hours" value={hours} />
        <TimeBox label="Minutes" value={minutes} />
        <TimeBox label="Seconds" value={seconds} />
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-slate-400">
        🚀 Launching at <span className="text-emerald-400">12:00 AM IST</span>
      </p>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="
      flex flex-col items-center
      bg-white/5 backdrop-blur-xl
      border border-white/10
      rounded-2xl px-4 py-3 min-w-[72px]
      shadow-lg shadow-emerald-500/10
    ">
      <span className="text-2xl font-semibold text-emerald-400">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[11px] uppercase tracking-wider text-slate-400 mt-1">
        {label}
      </span>
    </div>
  );
}
