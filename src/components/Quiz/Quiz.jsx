import React, { useState } from "react";

const answers = {
  thirdAngle: "30",
  hypotnuse: "5",
  typeBySides: "equilateral",
  area: "250",
  typeByAngles: "all",
};

export default function Quiz() {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const handleChange = (e) => {
    let answersCopy = { ...userAnswers };
    answersCopy[e.target.name] = e.target.value;
    setUserAnswers(answersCopy);
  };

  const handleSubmit = (e) => {
    setPlaying(true);
    let newScore = 0;
    e.preventDefault();
    Object.keys(answers).forEach((item) => {
      if (answers[item] === userAnswers[item]) {
        return newScore++;
      }
    });
    setScore(newScore);
  };
  return (
    <div>
      <h1 className="common-heading">Calculate Hypotenuse of a triangle</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="common-question">
            1. What is the value of third angle if other two angles are 90 and
            60?
          </div>
          <div>
            <div className="input-container">
              <input
                id="1_a"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="thirdAngle"
                value="30"
              />
              <label htmlFor="1_a">30</label>
            </div>
            <div className="input-container">
              <input
                id="1_b"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="thirdAngle"
                value="60"
              />
              <label htmlFor="1_b">60</label>
            </div>
            <div className="input-container">
              <input
                id="1_c"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="thirdAngle"
                value="90"
              />
              <label htmlFor="1_c">90</label>
            </div>
          </div>
          <div className="common-question">
            1. Calculate hypotenuse if base and height are 3 and 4 respectively.
          </div>
          <div>
            <div className="input-container">
              <input
                id="2_a"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="hypotnuse"
                value="3"
              />
              <label htmlFor="2_a">3</label>
            </div>
            <div className="input-container">
              <input
                id="2_b"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="hypotnuse"
                value="6"
              />
              <label htmlFor="2_b">6</label>
            </div>
            <div className="input-container">
              <input
                id="2_c"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="hypotnuse"
                value="5"
              />
              <label htmlFor="2_c">5</label>
            </div>
          </div>
          <div className="common-question">
            3. A triangle having all three sides equal is known as ....
          </div>
          <div>
            <div className="input-container">
              <input
                id="3_a"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="typeBySides"
                value="scalene"
              />
              <label htmlFor="3_a">Scalene</label>
            </div>
            <div className="input-container">
              <input
                id="3_b"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="typeBySides"
                value="isosceles"
              />
              <label htmlFor="3_b">Isosceles</label>
            </div>
            <div className="input-container">
              <input
                id="3_c"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="typeBySides"
                value="equilateral"
              />
              <label htmlFor="3_c">Equilateral</label>
            </div>
          </div>
          <div className="common-question">
            4. Area of a right trinangle with base = 20 and height = 25 is ....
          </div>
          <div>
            <div className="input-container">
              <input
                id="4_a"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="area"
                value="300"
              />
              <label htmlFor="4_a">300</label>
            </div>
            <div className="input-container">
              <input
                id="4_b"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="area"
                value="250"
              />
              <label htmlFor="4_b">250</label>
            </div>
            <div className="input-container">
              <input
                id="4_c"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="area"
                value="500"
              />
              <label htmlFor="4_c">500</label>
            </div>
          </div>
          <div className="common-question">5. An acute triangle has ....</div>
          <div>
            <div className="input-container">
              <input
                id="5_a"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="typeByAngles"
                value="all"
              />
              <label htmlFor="5_a">All angles less than 90</label>
            </div>
            <div className="input-container">
              <input
                id="5_b"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="typeByAngles"
                value="one"
              />
              <label htmlFor="5_b">One angle equal to 90</label>
            </div>
            <div className="input-container">
              <input
                id="5_c"
                type="radio"
                onChange={handleChange}
                className="common-radio"
                name="typeByAngles"
                value="two"
              />
              <label htmlFor="5_c">2 angles greater than 90</label>
            </div>
          </div>
          <div>
            <button className="common-button">Get your score</button>
          </div>
        </form>
        {playing ? (
          <h3 className="common-result">
            Your score for this quiz was found to be {score}.
          </h3>
        ) : null}
      </div>
    </div>
  );
}
