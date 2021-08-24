import React, { useState } from "react";
import Area from "../Area/Area";
import AreaBySides from "../AreaBySides/AreaBySides";
import "./AreaContainer.css";

export default function AreaContainer() {
  const [typeOfArea, setTypeOfArea] = useState("");
  return (
    <div className="area-container">
      <div className="select-container">
        <label className="area-label" htmlFor="type">
          Select type of Area
        </label>
        <select
          onChange={(e) => setTypeOfArea(e.target.value)}
          id="type"
          className="select"
        >
          <option className="option none" value="">
            None
          </option>
          <option className="option" value="bAndH">
            Area by Base & Height
          </option>
          <option className="option" value="sides">
            Area by sides
          </option>
        </select>
      </div>
      {typeOfArea === "bAndH" && <Area />}
      {typeOfArea === "sides" && <AreaBySides />}
    </div>
  );
}
