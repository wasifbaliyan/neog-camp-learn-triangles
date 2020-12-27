import { useState } from "react";

export default function SumOfAngles() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [sum, setSum] = useState(0);
  const [show, setShow] = useState(false);

  const handleReset = () => {
    setFirst("");
    setSecond("");
    setThird("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSum(Number(first) + Number(second) + Number(third));
    setShow(true);
    handleReset();
  };

  return (
    <div className="sum">
      <div className="sum-container">
        <h2 className="sum-heading">Check If sum of angles is a Triangle?</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="sum-form">
            <div className="input-container">
              <label htmlFor="first-angle">First Angle:</label>
              <input
                required
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                type="number"
                min="0"
                max="180"
                id="first-angle"
              />
            </div>
            <div className="input-container">
              <label htmlFor="second-angle">Second Angle:</label>
              <input
                required
                value={second}
                onChange={(e) => setSecond(e.target.value)}
                type="number"
                min="0"
                max="180"
                id="second-angle"
              />
            </div>
            <div className="input-container">
              <label htmlFor="third-angle">Third Angle:</label>
              <input
                required
                value={third}
                onChange={(e) => setThird(e.target.value)}
                type="number"
                min="0"
                max="180"
                id="third-angle"
              />
            </div>
            <button type="submit">Check Triangle</button>
          </form>
        </div>
        <h1 style={{ display: show ? "" : "none" }}>
          {sum === 180
            ? "Yayy! It is a triangle coz sum of angles is 180."
            : "Try Again. It is not a triangle as sum of angles is not 180."}
        </h1>
      </div>
    </div>
  );
}
