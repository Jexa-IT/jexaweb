import { useEffect, useState } from "react";

function getTimeLeft(targetTime) {
  const diff = targetTime - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function useLaunchTime(targetDate) {
  const targetTime = targetDate.getTime();

  const [isLive, setIsLive] = useState(Date.now() >= targetTime);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetTime));

  useEffect(() => {
    if (isLive) return;

    const interval = setInterval(() => {
      const now = Date.now();

      if (now >= targetTime) {
        setIsLive(true);
        clearInterval(interval);
      } else {
        setTimeLeft(getTimeLeft(targetTime));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isLive, targetTime]);

  return { isLive, timeLeft };
}
