import { useState } from "react";

export default function CheckByAngles() {
  const randOne = Math.floor(Math.random() * 9 + 1) * 10;
  const randTwo = Math.floor(randOne / 2);
  const [first, setFirst] = useState(randOne);
  const [second, setSecond] = useState(randTwo);
  const [third, setThird] = useState(180 - (randOne + randTwo));

  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [playing, setPlaying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaying(true);
    if (
      (first === 0 || second === 0 || third === 0) &&
      answer === "not a triangle"
    ) {
      setResult("Correct! It is not a triangle.");
    }
    if (
      first === second &&
      second === third &&
      third === first &&
      answer === "equilateral triangle"
    ) {
      setResult("Correct! It is an equilateral triangle.");
    } else if (
      (first === second || second === third || third === first) &&
      answer === "isoceles triangle"
    ) {
      setResult("Correct! It is a isoceles triangle.");
    } else if (
      first !== second &&
      second !== third &&
      third !== first &&
      answer === "scalene triangle"
    ) {
      setResult("Correct! It is an scalene triangle.");
    } else {
      setResult("Incorrect Answer! Try Again.");
    }
  };

  const handleClick = () => {
    setFirst(randOne);
    setSecond(randTwo);
    setThird(180 - (randOne + randTwo));
    setPlaying(false);
  };

  return (
    <div style={{ padding: "1rem 0" }}>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Check the Type Of Triangles
      </h1>
      <div style={{ textAlign: "center" }}>
        <p>
          <span
            style={{
              margin: "0.3rem",
              display: "inline-block",
              fontSize: "1.2rem ",
              fontWeight: "500",
              background: "teal",
              color: "#fff",
              padding: "5px",
            }}
          >
            First Value:
            {first}
          </span>
          <span
            style={{
              margin: "0.3rem",
              display: "inline-block",
              fontSize: "1.2rem ",
              fontWeight: "500",
              background: "teal",
              color: "#fff",
              padding: "5px",
            }}
          >
            Second Value:
            {second}
          </span>
          <span
            style={{
              margin: "0.3rem",
              display: "inline-block",
              fontSize: "1.2rem ",
              fontWeight: "500",
              background: "teal",
              color: "#fff",
              padding: "5px",
            }}
          >
            Third Value:
            {third}
          </span>
        </p>
        <form style={{ marginTop: "1rem" }} onSubmit={handleSubmit}>
          <select
            required
            name="options"
            onChange={(e) => setAnswer(e.target.value)}
            id="options"
          >
            <option value="not a triangle">Not A Triangle</option>
            <option value="equilateral triangle">Equilateral Triangle</option>
            <option value="isoceles triangle">Isoceles Triangle</option>
            <option value="scalene triangle">Scalene Triangle</option>
          </select>
          <button>Check Answer</button>
        </form>
        <button onClick={handleClick}>Play Again</button>
        {playing ? <h3 className="result">{result}</h3> : null}
      </div>
    </div>
  );
}
