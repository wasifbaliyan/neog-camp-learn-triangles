import { useState } from "react";

export default function Area() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");

  const [area, setArea] = useState(null);
  const [playing, setPlaying] = useState(false);

  const handleSubmit = (e) => {
    setPlaying(true);
    e.preventDefault();
    setArea((1 / 2) * base * height);
  };
  return (
    <div>
      <h1 className="common-heading">Calculate Area by Base and Height</h1>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              required
              type="number"
              onChange={(e) => setBase(e.target.value)}
              placeholder="Enter base value(b)"
              value={base}
              className="common-input"
            />
          </div>
          <div>
            <input
              className="common-input"
              required
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height value(h)"
            />
          </div>

          <div>
            <button className="common-button">Calculate Area</button>
          </div>
        </form>
        {playing ? (
          <p className="common-result">
            The area was found to be {area} square unit.
          </p>
        ) : null}
      </div>
    </div>
  );
}
