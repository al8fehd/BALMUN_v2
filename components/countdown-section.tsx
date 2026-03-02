"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTargetDate() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetThisYear = new Date(currentYear, 4, 23, 0, 0, 0);

  if (now <= targetThisYear) {
    return targetThisYear;
  }

  return new Date(currentYear + 1, 4, 23, 0, 0, 0);
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function CountdownSection() {
  const [targetDate] = useState(getTargetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-8 text-center md:p-12">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Countdown
        </span>
        <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
          23 May
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-background p-4"
            >
              <p className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
