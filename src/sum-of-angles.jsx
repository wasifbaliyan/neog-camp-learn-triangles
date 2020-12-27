import { useState } from "react";

export default function SumOfAngles() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [sum, setSum] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleReset = () => {
    setFirst("");
    setSecond("");
    setThird("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSum(Number(first) + Number(second) + Number(third));
    setPlaying(true);
    handleReset();
  };

  return (
    <div style={{ padding: "1rem 0" }}>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Check If sum of angles is a Triangle?
      </h1>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit} className="sum-form">
          <input
            required
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            type="number"
            min="0"
            placeholder="First Angle"
          />

          <input
            required
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            type="number"
            min="0"
            placeholder="Second Angle"
          />

          <input
            required
            value={third}
            onChange={(e) => setThird(e.target.value)}
            type="number"
            min="0"
            placeholder="Third Angle"
          />

          <button type="submit">Check Triangle</button>
        </form>
        {playing ? (
          <h3 className="result">
            {sum === 180
              ? "Correct!! The sum of angles is 180. So, It's a triangle."
              : "Nay!! Incorrect Answer... Try Again"}
          </h3>
        ) : null}
      </div>
    </div>
  );
}
