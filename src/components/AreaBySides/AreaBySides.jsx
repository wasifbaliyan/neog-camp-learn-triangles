import { useState } from "react";

export default function AreaBySides() {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [sideC, setSideC] = useState("");

  const [area, setArea] = useState(null);
  const [playing, setPlaying] = useState(false);
  function calculateSemiPerimeter(a, b, c) {
    return (Number(a) + Number(b) + Number(c)) / 2;
  }

  function calculateArea(a, b, c, s) {
    const sMinusA = s - Number(a);
    const sMinusB = s - Number(b);
    const sMinusC = s - Number(c);

    return Math.sqrt(s * sMinusA * sMinusB * sMinusC);
  }

  const handleSubmit = (e) => {
    setPlaying(true);
    e.preventDefault();
    const s = calculateSemiPerimeter(sideA, sideB, sideC);
    const a = calculateArea(sideA, sideB, sideC, s);
    setArea(a);
  };
  return (
    <div style={{ padding: "1rem 0" }}>
      <h1
        className="common-heading"
        style={{ marginBottom: "1rem", textAlign: "center" }}
      >
        Calculate Area by 3 sides
      </h1>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              required
              type="number"
              onChange={(e) => setSideA(e.target.value)}
              placeholder="Enter base value(a)"
              value={sideA}
              className="common-input"
            />
          </div>
          <div>
            <input
              required
              type="number"
              onChange={(e) => setSideB(e.target.value)}
              placeholder="Enter base value(b)"
              value={sideB}
              className="common-input"
            />
          </div>
          <div>
            <input
              className="common-input"
              required
              type="number"
              value={sideC}
              onChange={(e) => setSideC(e.target.value)}
              placeholder="Enter height value(c)"
            />
          </div>

          <div>
            <button className="common-button">Calculate Area</button>
          </div>
        </form>
        {playing ? (
          <p className="common-result">
            The area was found to be {area.toFixed(2)} square unit.
          </p>
        ) : null}
      </div>
    </div>
  );
}
