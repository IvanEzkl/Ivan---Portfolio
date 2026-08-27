import { useState, useEffect } from "react";

export function useClock(hostTimezone = "Asia/Manila") {
  const [timeState, setTimeState] = useState({
    hostTimeStr: "--:--:--",
    hostDateStr: "---",
    hostDayStr: "---",
    visitorTimeStr: "--:--:--",
    visitorDateStr: "---",
    visitorDayStr: "---",
    visitorTz: "Local",
    visitorOffset: "UTC",
    isSameTz: false,
  });

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();

        let detectedTz = "Local";
        let detectedOffset = "";
        try {
          detectedTz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local";
          const offsetMinutes = -now.getTimezoneOffset();
          const sign = offsetMinutes >= 0 ? "+" : "-";
          const hours = Math.floor(Math.abs(offsetMinutes) / 60);
          const mins = Math.abs(offsetMinutes) % 60;
          detectedOffset = `UTC${sign}${hours}${mins > 0 ? `:${mins.toString().padStart(2, "0")}` : ""}`;
        } catch {
          detectedTz = "Local";
        }

        // Host Time (Asia/Manila UTC+8)
        const hostTimeFormatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: hostTimezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });

        const hostDateFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: hostTimezone,
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        const hostDayFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: hostTimezone,
          weekday: "long",
        });

        // Visitor Time (Browser local timezone)
        const visitorTimeFormatter = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });

        const visitorDateFormatter = new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        const visitorDayFormatter = new Intl.DateTimeFormat("en-US", {
          weekday: "long",
        });

        setTimeState({
          hostTimeStr: hostTimeFormatter.format(now),
          hostDateStr: hostDateFormatter.format(now),
          hostDayStr: hostDayFormatter.format(now),
          visitorTimeStr: visitorTimeFormatter.format(now),
          visitorDateStr: visitorDateFormatter.format(now),
          visitorDayStr: visitorDayFormatter.format(now),
          visitorTz: detectedTz,
          visitorOffset: detectedOffset,
          isSameTz: detectedTz.toLowerCase() === hostTimezone.toLowerCase(),
        });
      } catch (err) {
        console.error("Clock timezone error:", err);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [hostTimezone]);

  return timeState;
}

