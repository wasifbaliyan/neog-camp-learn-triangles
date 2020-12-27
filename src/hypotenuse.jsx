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
    setBase(0);
    setHeight(0);
  };

  return (
    <div style={{ padding: "1rem 0" }}>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Calculate Hypotenuse
      </h1>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Base"
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
          <input
            placeholder="Height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button>Check</button>
        </form>
        {playing ? (
          <h3 className="result">
            The Hypotenuse was found to be {result} unit.
          </h3>
        ) : null}
      </div>
    </div>
  );
}
