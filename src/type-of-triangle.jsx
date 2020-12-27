import { useState } from "react";

export default function TypeOfTriangle() {
  const randOne = Math.floor(Math.random() * 9 + 1) * 10;
  const randTwo = Math.floor(randOne / 2);
  const [first, setFirst] = useState(randOne);
  const [second, setSecond] = useState(randTwo);
  const [third, setThird] = useState(180 - (randOne + randTwo));

  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (first === 0 || second === 0 || third === 0) &&
      answer === "not a triangle"
    ) {
      setResult("Correct! It is not a triangle.");
    }
    if (
      (first > 90 || second > 90 || third > 90) &&
      answer === "obtuse triangle"
    ) {
      setResult("Correct! It is an obtuse triangle.");
    } else if (
      (first === 90 || second === 90 || third === 90) &&
      answer === "right triangle"
    ) {
      setResult("Correct! It is a right triangle.");
    } else if (
      (first < 90 || second < 90 || third < 90) &&
      answer === "acute triangle"
    ) {
      setResult("Correct! It is an acute triangle.");
    } else {
      setResult("Incorrect Answer! Try Again.");
    }
  };

  const handleClick = () => {
    setFirst(randOne);
    setSecond(randTwo);
    setThird(180 - (randOne + randTwo));
  };

  return (
    <div className="type-container">
      <h2>Check the Type Of Triangles</h2>
      <div className="list-of-angles">
        <p>{first}</p>
        <p>{second}</p>
        <p>{third}</p>
        <form onSubmit={handleSubmit}>
          <select
            required
            name="options"
            onChange={(e) => setAnswer(e.target.value)}
            id="options"
          >
            <option value="not a triangle">Not A Triangle</option>
            <option value="right triangle">Right Triangle</option>
            <option value="acute triangle">Acute Triangle</option>
            <option value="obtuse triangle">Obtuse Triangle</option>
          </select>
          <button>Check Answer</button>
        </form>
        <button onClick={handleClick}>Play Again</button>
      </div>

      <h3>{result}</h3>
    </div>
  );
}
