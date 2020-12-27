import { useState } from "react";

export default function Hypotenuse() {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const hypotenuse = Math.sqrt(base ** 2 + height ** 2);
    setResult(hypotenuse);
    setBase(0);
    setHeight(0);
  };

  return (
    <div>
      <h1>Calculate Hypotenuse</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button>Check</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}
