import React from "react";
import { useState } from "react";

function Splash() {
  const [clockDisplay, setClockDisplay] = useState()

  let interval;
  const eventDay = new Date("2024-01-20");
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let days = "00";
  let hours = "00";
  let minutes = "00";
  let seconds = "00";
  console.log("event day :", eventDay);


  const countdownFn = () => { 
    const today = new Date();
    const timeSpan = eventDay - today;
      days = Math.floor(timeSpan / day);
      hours = Math.floor((timeSpan % day) / hour);
      minutes = Math.floor((timeSpan % hour) / minute);
      seconds = Math.floor((timeSpan % minute) / second);
      setClockDisplay(`${days}:${hours}:${minutes}:${seconds}`);
    }


    interval = setInterval(countdownFn, second);
  
  return (
    <section className="SplashContainer">
      <h1>The best damned festival</h1>
      <h1>{clockDisplay}</h1>
    </section>
  )
}


export default Splash;
