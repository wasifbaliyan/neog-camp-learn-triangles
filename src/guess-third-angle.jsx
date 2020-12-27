import { useState } from "react";

export default function GuessThirdAngle() {
  const randOne = Math.floor(Math.random() * 12 + 1) * 10;
  const randTwo = Math.floor(randOne / 2);
  const [first, setFirst] = useState(randOne);
  const [second, setSecond] = useState(randTwo);
  const [third, setThird] = useState(180 - (randOne + randTwo));

  const [answer, setAnswer] = useState(0);
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(answer) === third) {
      setResult("Your Correct Answer is " + third);
    } else {
      setResult("Incorrect Answer, The correct answer is " + third);
    }

    setAnswer(0);
  };

  const handleClick = () => {
    setFirst(randOne);
    setSecond(randTwo);
    setThird(180 - (randOne + randTwo));
    setAnswer(0);
  };

  return (
    <div className="type-container">
      <h2>Guess the third angle</h2>
      <div className="list-of-angles">
        <p>{first}</p>
        <p>{second}</p>
        <form onSubmit={handleSubmit}>
          <input
            value={answer}
            type="number"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button>Check Answer</button>
        </form>
        <button onClick={handleClick}>Play Again</button>
      </div>

      <h3>{result}</h3>
    </div>
  );
}
