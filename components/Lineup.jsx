import React from "react";
import LineupMenu from "./UI-components/LineupMenu";
import LineupCard from "./UI-components/LineupCard";
import Link from "next/link";

function Lineup() {
  return (
    <section className="lineup">
      <LineupMenu />
      <section className="lineup-list">
        <div className="lineup-showing">
          <h4>Bands</h4>
          <h5>Showing all</h5>
        </div>
        <Link href={"/tickets/step1"} className={"primary splashCont"}>
        Get tickets
      </Link>
        <LineupCard />
        <LineupCard />
        <LineupCard />
        <LineupCard />
      </section>
    </section>
  );
}

export default Lineup;
