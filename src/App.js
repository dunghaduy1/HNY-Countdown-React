import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-2-30`) - +new Date();
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
  const [year] = useState(new Date().getFullYear());

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
      {timerComponents.length ? timerComponents : <span>Happy new year</span>}
      </div>
    </div>
  );
}

export default App;
