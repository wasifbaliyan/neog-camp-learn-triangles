import "./App.css";
import CheckByAngles from "./check-by-angles";
import TypeOfTriangle from "./type-of-triangle";
import GuessThirdAngle from "./guess-third-angle";
import Hypotenuse from "./hypotenuse";
import Area from "./area";
import Header from "./header";
import { useState } from "react";
import SumOfAngles from "./sum-of-angles";

function App() {
  const [route, setRoute] = useState("area");
  let element = <Area />;
  if (route === "area") {
    element = <Area />;
  } else if (route === "hypotenuse") {
    element = <Hypotenuse />;
  } else if (route === "third") {
    element = <GuessThirdAngle />;
  } else if (route === "sum") {
    element = <SumOfAngles />;
  } else if (route === "angle") {
    element = <TypeOfTriangle />;
  } else if (route === "side") {
    element = <CheckByAngles />;
  } else {
    element = <Area />;
  }
  return (
    <>
      <Header setRoute={setRoute} />
      <main className="main">{element}</main>
    </>
  );
}

export default App;
