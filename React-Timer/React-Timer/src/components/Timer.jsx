import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(20);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;
    console.log("useEffect");
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time <= 1) {
            setIsActive(false);
            return 0;
          }
          return time - 1;
        });
        console.log(time);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <>
      <div>Timer: {time}</div>
      <br />
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Pause" : "Resume"}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setTime(20);
          setIsActive(false);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Timer;
