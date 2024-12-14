// import { Button } from "@material-ui/core";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Question = ({
    currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  setScore,
  score,
 
}) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

 const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if ( currentQuestion > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrentQuestion(0);
    // questions();
  };

  return (
    <div className="question">
      <h1>Question {currentQuestion + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;