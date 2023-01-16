import React from "react";
import Logo from "../assets/foofest-logo.png";
import Image from "next/image";
import Link from "next/link";

function Nav(props) {
  return (
    <nav>
      <Link href={"/"}>
        <Image src={Logo} alt="Foofest logo" className="logo" />
      </Link>
      {/* show timer */}
      <h5>{props.timeLeft}</h5>
      
    </nav>
  );
}

export default Nav;
