import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";


function timeout() {

  const router = useRouter()

function refreshPage() {
  router.push("/")
}
  return (
    <div className="center-container">
      <div className="center-content">
        <h2>Your session timed out</h2>
        <p>To ensure that everyone has a fair chance at rocking out at FOOFEST, we only reserve tickets for 5 minutes.</p>
        <p>We’re sorry for the inconvenience. Please try again.</p>
        <button className="primary" onClick={refreshPage}>Try Again</button>

      </div>
    </div>
  );
}

export default timeout;
