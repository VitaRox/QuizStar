import React, {useState} from "react";
import { Container, List } from 'semantic-ui-react';
const QuestionBox = ({question, answer, selected}) => {
  return (
    <Container>
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
        >
          {text}
        </button>
      ))}
    </div>
    </Container>
  );
};

export default QuestionBox;
