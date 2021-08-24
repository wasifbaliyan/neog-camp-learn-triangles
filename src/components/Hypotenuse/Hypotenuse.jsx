import { useState } from "react";

export default function Hypotenuse() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [playing, setPlaying] = useState(false);

  const handleSubmit = (e) => {
    setPlaying(true);
    e.preventDefault();
    const hypotenuse = Math.sqrt(base ** 2 + height ** 2);
    setResult(hypotenuse);
  };

  return (
    <div>
      <h1 className="common-heading">Calculate Hypotenuse of a triangle</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="common-input"
              placeholder="Base"
              type="number"
              value={base}
              onChange={(e) => setBase(e.target.value)}
            />
          </div>
          <div>
            <input
              className="common-input"
              placeholder="Height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="common-button">Calculate Hypotenuse</button>
          </div>
        </form>
        {playing ? (
          <h3 className="common-result">
            The Hypotenuse was found to be {result.toFixed(2)} unit.
          </h3>
        ) : null}
      </div>
    </div>
  );
}
