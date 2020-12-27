import { useState } from "react";

export default function CheckByAngles() {
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
            <option value="equilateral triangle">Equilateral Triangle</option>
            <option value="isoceles triangle">Isoceles Triangle</option>
            <option value="scalene triangle">Scalene Triangle</option>
          </select>
          <button>Check Answer</button>
        </form>
        <button onClick={handleClick}>Play Again</button>
      </div>

      <h3>{result}</h3>
    </div>
  );
}
