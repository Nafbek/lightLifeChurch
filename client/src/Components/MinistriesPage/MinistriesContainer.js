import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import Header from "../Header";
import Women from "./Women";
import Prayer from "./Prayer";
import Deacon from "./Deacons";
import Pastoral from "./Pastoral";
import Outreach from "./OutreachAndEvangelism";
import ChildrenAndYouth from "./ChildrenAndYouth";
import YoungAdults from "./YoundAdults";
import Fundraising from "./Fundraising";
import Worship from "./Worship";

export default function Ministries() {
  //   const [ministry, setMinistries] = useState("Prayer");

  //   const handleChosenMinistry = (e) => setMinistries(e.target.value);

  const { ministry } = useParams();
  if (ministry === "prayer") {
    return <Prayer />;
  } else if (ministry === "women") {
    return <Women />;
  } else if (ministry === "outreach") {
    return <Outreach />;
  } else if (ministry === "childrenandyouth") {
    return <ChildrenAndYouth />;
  } else if (ministry === "youngadults") {
    return <YoungAdults />;
  } else if (ministry === "worship") {
    return <Worship />;
  } else if (ministry === "pastoral") {
    return <Pastoral />;
  } else if (ministry === "deacons") {
    return <Deacon />;
  } else if (ministry === "fundraising") {
    return <Fundraising />;
  }
}
