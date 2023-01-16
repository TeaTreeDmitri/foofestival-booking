import React from "react";
import { useState } from "react";
import Link from "next/link";

function Splash() {
  const [clockDisplay, setClockDisplay] = useState()

  let interval;
  //date format : ("yyyy-mm-dd")
  const eventDay = new Date("2023-05-16");
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let days = "00";
  let hours = "00";
  let minutes = "00";
  let seconds = "00";


  const countdownFn = () => { 
      const today = new Date();
      if (today <= eventDay) {
      const timeSpan = eventDay - today;
        days = Math.floor(timeSpan / day);
        hours = Math.floor((timeSpan % day) / hour);
        minutes = Math.floor((timeSpan % hour) / minute);
        seconds = Math.floor((timeSpan % minute) / second);
        if((seconds+"").length === 1){
          seconds = "0"+ seconds;
      }
        setClockDisplay(`${days}:${hours}:${minutes}:${seconds}`);
      } else {
        setClockDisplay("has begun..")
      }
    }


    interval = setInterval(countdownFn, second);
  
  return (
    <section className="SplashContainer">
      <h1>The best damned festival</h1>
      <h1>{clockDisplay}</h1>
      {/* <h4 className="splashCont"> - Days - Hours - Minutes - Seconds - </h4> */}
      <Link href={"/tickets/step1"} className={"primary splashCont"}>
        Get tickets
      </Link>
    </section>
  )
}


export default Splash;
