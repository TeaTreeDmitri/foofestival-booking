import "../styles/globals.scss";
import Layout from "../components/Layout.jsx";
import App from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  // global object for the user's order
  const [orderInfo, setOrderInfo] = useState({
    vipTickets: 0,
    regTickets: 0,
    totalTickets: 0,
    ticketsValid: false,
    selectedArea: "",
    tentService: false,
    greenCamping: false,
    totalCost: 0,
    validates: null,
    orderID: "",
    guests: [],
  });

  const [timeLeft, setTimeLeft] = useState("HELLO");

  //timer function for nav bar
  
  //timer function of 5 minutes until successful purchase
  const second = 1000;
  const minute = second * 60;
  const router = useRouter();
  
  // initialise timer count
  let timer = minute * 5;
  let minutes = "0";
  let seconds = "00";
  
  //   purchase timeout function
  function purchaseTimer() {
    if (orderInfo.validates === true) { 
      if (timer > 0) {
          timer = timer-second;
          minutes = Math.floor(timer / minute);
          seconds = Math.floor((timer % minute) / second);

          //create double digits in seconds < 10
          if((seconds+"").length === 1){
            seconds = "0"+ seconds;
        }

          //formatting of seconds to minutes and seconds as a string
         
          return (`you have ${minutes}:${seconds} left to finish your purchase`);
          } else {
              router.push("/tickets/timeout");
              timer = minute * 5;
          }
        }
      }
  
      useEffect(() => {
        const interval = setInterval(() => setTimeLeft(purchaseTimer()), 1000);
        return () => {
          clearInterval(interval);
      };
      }, 
      [orderInfo]);


  //everytime either reg tickets or vip tickets are updated, update total tickets too
  useEffect(() => {
    function setTickets() {
      let totalTickets = orderInfo.vipTickets + orderInfo.regTickets;
      setOrderInfo({ ...orderInfo, totalTickets: totalTickets });
    }
    setTickets();
  }, [orderInfo.regTickets, orderInfo.vipTickets]);

  // save regular and vip tickets in state
  function updateRegTickets(event) {
    let tickReg = event;
    // console.log("regular", tickReg);
    setOrderInfo({ ...orderInfo, regTickets: tickReg });
  }

  function updateVIPTickets(event) {
    let tickVIP = event;
    // console.log("VIP", tickVIP);
    setOrderInfo({ ...orderInfo, vipTickets: tickVIP });
  }

  function tentSetUp(event) {
    console.log("setup check: ", event.target);
    let tentChoice = event.target.checked;
    setOrderInfo({ ...orderInfo, tentService: tentChoice });
  }
  function tentGreen(event) {
    console.log("tentgreen check: ", event.target);
    let tentChoice = event.target.checked;
    setOrderInfo({ ...orderInfo, greenCamping: tentChoice });
  }
  let tentPrice = 249;
  let setUpPrice;
  let tentSize = "";
  if (orderInfo.totalTickets <= 2) {
    setUpPrice = 299;
    tentSize = "2-person tent";
  } else if (orderInfo.totalTickets === 3) {
    setUpPrice = 399;
    tentSize = "3-person tent";
  } else if (orderInfo.totalTickets === 4) {
    setUpPrice = 598;
    tentSize = "2 x 2-person tents";
  } else if (orderInfo.totalTickets === 5) {
    setUpPrice = 798;
    tentSize = "1 x 2 person tent & 1 x 3 person tent";
  } else {
    setUpPrice = 299;
    tentSize = "2-person tent";
  }

  const selectArea = (e) => {
    setOrderInfo({
      ...orderInfo,
      selectedArea: e.target.value,
    });
  };

  // ORDER ID
  function setOrderID(id) {
    console.log("setOrderID has this id:", id);
    setOrderInfo({ ...orderInfo, orderID: id });
    console.log("orderID is set to:", orderInfo.orderID);
  }

  return (
    <>
      <Layout timeLeft={timeLeft}>
        <Component
          updateRegTickets={updateRegTickets}
          updateVIPTickets={updateVIPTickets}
          orderInfo={orderInfo}
          {...pageProps}
          tentSetUp={tentSetUp}
          tentGreen={tentGreen}
          selectArea={selectArea}
          tentPrice={tentPrice}
          setUpPrice={setUpPrice}
          tentSize={tentSize}
          setOrderInfo={setOrderInfo}
          setOrderID={setOrderID}
        />
      </Layout>
    </>
  );
}


export default MyApp;
