import React from "react";


export function Timer(){
const [time, setTime] = React.useState({ h: 0, m: 0, s: 0, ms: 0 });
const [isActive, setIsActive] = React.useState(false);
const intervalRef = React.useRef(null);

  const startTimer = () => {
    if (!isActive) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const ms = prevTime.ms + 10;
          const s = prevTime.s + Math.floor(ms / 1000);
          const m = prevTime.m + Math.floor(s / 60);
          const h = prevTime.h + Math.floor(m / 60);
          return { h, m: m % 60, s: s % 60, ms: ms % 1000 };
        });
      }, 10);
      setIsActive(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTime({ h: 0, m: 0, s: 0, ms: 0 });
  };

  const formatTime = (time) => {
    const hh = time.h.toString().padStart(2, "0");
    const mm = time.m.toString().padStart(2, "0");
    const ss = time.s.toString().padStart(2, "0");
    const mss = time.ms.toString().padStart(3, "0");
    return `${hh}:${mm}:${ss}.${mss}`;
  };
  return(
    {startTimer, stopTimer, resetTimer ,time, formatTime}
  )

}