import React from 'react'
import { useState, useEffect } from 'react';

function Timeout() {
    const [timeLeft, setTimeLeft] = useState();
    //timer function of 5 minutes until successful purchase
  const second = 1000;
  const minute = second * 60;
  // initialise timer count
  let timer = minute * 5;
  let minutes = "0";
  let seconds = "00";
  
//   timeout function
  function purchaseTimer() {
    if (timer > 0) {
        console.log(timer)
        timer = timer-second;
        minutes = Math.floor(timer / minute);
        seconds = Math.floor((timer % minute) / second);
        //formatting of seconds to minutes and seconds as a string
        return (`${minutes}:${seconds}`);
        } else {
            alert("you ran out of tiiiime bitch")
        }
    }

useEffect(() => {
  const interval = setInterval(() => setTimeLeft(purchaseTimer()), 1000);
  return () => {
    clearInterval(interval);
};
}, []);
  
  return (
    <h5>Your tickets are reserved for {timeLeft}</h5>
  )
}

export default Timeout