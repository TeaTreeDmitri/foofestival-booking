import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";
import favicon from "../assets/foofest-favicon.png";

function Layout(props) {

  // console.log("Layout level: ", props.timeLeft);
  return (
    <>
      <Head>
        <title>FOOFEST | The best damned festival</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/jpg" src={favicon} />
      </Head>
      <Nav timeLeft={props.timeLeft}/>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
