import { useState } from "react";

export default function Area() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");

  const [area, setArea] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArea((1 / 2) * base * height);
    setBase("");
    setHeight("");
  };
  return (
    <div>
      <h1>Calculate Area of Triangle by sides</h1>
      <div>
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
        <h1>{area}</h1>
      </div>
    </div>
  );
}
