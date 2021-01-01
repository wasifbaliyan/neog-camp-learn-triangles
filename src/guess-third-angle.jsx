import { useState } from "react";

export default function GuessThirdAngle() {
  const randOne = Math.floor(Math.random() * 12 + 1) * 10;
  const randTwo = Math.floor(randOne / 2);
  const [first, setFirst] = useState(randOne);
  const [second, setSecond] = useState(randTwo);
  const [third, setThird] = useState(180 - (randOne + randTwo));

  const [answer, setAnswer] = useState(0);
  const [result, setResult] = useState("");
  const [playing, setPlaying] = useState(false);

  const handleSubmit = (e) => {
    setPlaying(true);
    e.preventDefault();
    if (Number(answer) === third) {
      setResult("Yayy!!! Your Answer is correct.");
    } else {
      setResult("Try Again! The correct answer is " + third + ".");
    }

    setAnswer(0);
  };

  const handleClick = () => {
    setFirst(randOne);
    setSecond(randTwo);
    setThird(180 - (randOne + randTwo));
    setAnswer(0);
    setPlaying(false);
  };

  return (
    <div style={{ padding: "1rem 0" }}>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Guess the third angle
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
        </p>
        <form style={{ marginTop: "1rem" }} onSubmit={handleSubmit}>
          <input
            value={answer}
            type="number"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button>Check Answer</button>
        </form>
        <button onClick={handleClick}>Play Again</button>
        {playing ? <h3 className="result">{result}</h3> : null}
      </div>
    </div>
  );
}
