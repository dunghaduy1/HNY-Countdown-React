import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const calculateTimeLeft = () => {
    const target = '2022-7-23';
    const difference = new Date(target) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
        giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
        phút: Math.floor((difference / 1000 / 60) % 60),
        giây: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    // if (!timeLeft[interval]) {
    //   return;
    // }

    timerComponents.push(
      <span>
        <span className="time">{timeLeft[interval]}</span> {interval}{" "}
      </span>
    );
  });
  return (
    <div className="background"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background.gif'})` 
          }}
    >
      <div className="card time-box">
      {timerComponents.length ? timerComponents : <span className="hny-text">Chúc mừng sinh nhật Dũng Hà Duy</span>}
      </div>
    </div>
  );
}

export default App;
