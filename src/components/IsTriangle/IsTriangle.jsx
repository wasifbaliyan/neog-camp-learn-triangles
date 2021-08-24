import { useState } from "react";

export default function IsTriangle() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [sum, setSum] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSum(Number(first) + Number(second) + Number(third));
    setPlaying(true);
  };

  return (
    <div>
      <h1 className="common-heading">Check If sum of angles is a Triangle?</h1>
      <div>
        <form onSubmit={handleSubmit} className="sum-form">
          <div>
            <input
              className="common-input"
              required
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              type="number"
              min="0"
              placeholder="First Angle(A)"
            />
          </div>
          <div>
            <input
              className="common-input"
              required
              value={second}
              onChange={(e) => setSecond(e.target.value)}
              type="number"
              min="0"
              placeholder="Second Angle(B)"
            />
          </div>

          <div>
            <input
              className="common-input"
              required
              value={third}
              onChange={(e) => setThird(e.target.value)}
              type="number"
              min="0"
              placeholder="Third Angle(C)"
            />
          </div>

          <div>
            <button className="common-button" type="submit">
              Check Triangle
            </button>
          </div>
        </form>
        {playing ? (
          <h3 className="common-result">
            {sum === 180
              ? "Correct!! The sum of angles is 180. So, It's a triangle."
              : "Nay!! Incorrect Answer... Try Again"}
          </h3>
        ) : null}
      </div>
    </div>
  );
}
