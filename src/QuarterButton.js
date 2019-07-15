import React from "react";
import "./App.css";
// import BottomRow from "./BottomRow";
import { useState } from 'react';


function QuarterButton() {

const [quarterCurrent, setQuarter] = useState(0);
  console.log("clickCount", setQuarter);
  const testing = (quarterCurrent + 1)
 

  return (
<div>
  <button className="quarterButton1" onClick={() => setQuarter(quarterCurrent + 1)}>QUARTER</button>
   </div>

);
}


export default QuarterButton;