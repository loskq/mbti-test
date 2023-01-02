import React, { useState } from "react";

function Result(props) {
  const { questions, progress } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showType, setShowType] = useState(false);
  const [neSi, setNeSi] = useState(0);
  const [niSe, setNiSe] = useState(0);

  function handleButton(value) {
    const nextQues = currentQuestion + 1;
    setCurrentQuestion(nextQues);

    if (nextQues < questions.length) {
      setCurrentQuestion(nextQues);
    } else {
      setShowType(true);
    }

    if (value === 1) {
      setNeSi(neSi + 1);
    }

    if (value === 2) {
      setNiSe(niSe + 1);
    }
  }

  let type = "XXXX";

  neSi > 6 && niSe < 6
    ? (type = `You're type is ENFP.`)
    : niSe > 6 && niSe < 6
    ? (type = `You're type is ISTP.`)
    : neSi < 6
    ? (type = `You're type is INTJ.`)
    : niSe < 6
    ? (type = `You're type is ESFJ.`)
    : (type = "Undefined-1");

  return (
    <div>
      {showType ? (
        <div className="score-section black f3">
          <span>
            You scored {neSi} {niSe} out of {questions.length}
          </span>
          <div className="">{type}</div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count black f5">
              <h3>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </h3>
            </div>
            <div className="question-text ma4 mt0 black f3">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="w-30 f4 no-underline pill ph3 pv3 mb3 dib black link"
                  onClick={() => {
                    handleButton(answerOption.value);
                    progress();
                  }}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Result;
