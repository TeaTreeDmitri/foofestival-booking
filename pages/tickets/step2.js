import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputCheck from "../../components/UI-components/InputCheck";
import Button from "../../components/UI-components/Button";
import { useMediaQuery } from "usehooks-ts";
import MobileOrderOverview from "../../components/MobileOrderOverview";


let setUpPrice
let tentSize = ""

function step2(props) {
  // const ticketAmount = amount of requested tickets from previous step
  let tickets = props.orderInfo.regTickets + props.orderInfo.vipTickets;
  // Optional, pay to have the crew set up X tents for you.
// 2 person tent (including the tent) 299,-
// 3 person tent (including the tent) 399,-
// The number of tents must match the number of people in the group (number of tickets).
if (tickets <= 2) {
  setUpPrice = 299
  tentSize = "2-person tent"
} else if (tickets === 3) {
  setUpPrice = 399
  tentSize = "3-person tent"
} else if (tickets === 4) {
  setUpPrice = 598
  tentSize = "2 x 2-person tents"
} else if (tickets === 5) {
  setUpPrice = 798;
  tentSize = "1 x 2-person tent & 1 x 3-person tent"
} else {
  setUpPrice = 299;
  tentSize = "2-person tent"
}
function setOptions(setUp, green) {
  console.log("setUp: ", setUp, "green: ", green)
  props.setAddOns(setUp, green);
}

  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");


  return (
    <div className="order-container">
      <section className="order-interface">
        <StepIndicator step={2} />
        <h2>Tent options</h2>
        <h5>These are optional add-ons to improve your festival experience.</h5>
        <InputCheck title={"We can set up your tent(s)"} name={"TentSetup"} subtitle={tentSize} description={"Tents are included in price."} price={setUpPrice} setOptions={setOptions}/>
        <InputCheck title={"Green camping"} name={"TentGreen"} subtitle={"Sustainable tents"} description={"Tent made from recycled materials."} price={249} setOptions={setOptions}/>
        <p>
          <strong>NOTE:</strong> A mandatory booking fee of 99,- applies for each order.
        </p>
      </section>
      {matches ? <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} /> : <MobileOrderOverview />}
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step1"} />
        <Button buttonType={"primary"} buttonText={"Continue to details →"} href={"/tickets/step3"} />
      </div>
    </div>
  );
}

export default step2;
