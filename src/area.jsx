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
    setBase("");
    setHeight("");
  };
  return (
    <div style={{ padding: "1rem 0" }}>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Calculate Area of Triangle
      </h1>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="number"
            onChange={(e) => setBase(e.target.value)}
            placeholder="Base"
            value={base}
          />
          <input
            required
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
          />

          <button>Check Area</button>
        </form>
        {playing ? (
          <h3 className="result">
            The area was found to be {area} square unit.
          </h3>
        ) : null}
      </div>
    </div>
  );
}
