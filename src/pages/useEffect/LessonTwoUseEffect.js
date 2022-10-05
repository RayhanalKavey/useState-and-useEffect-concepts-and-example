import React, { useEffect, useState } from "react";

function LessonTwoUseEffect() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((current) => current + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  //notE : should not do like this
  // function LessonTwoUseEffect() {
  //   const [time, setTime] = useState(0);
  //   useEffect(() => {
  //     setInterval(() => {
  //       setTime(time + 1);
  //     }, 1000);
  //   }, []);

  return (
    <div>
      <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-purple-400 to-cyan-400">
        {time}
      </h1>
    </div>
  );
}

export default LessonTwoUseEffect;
