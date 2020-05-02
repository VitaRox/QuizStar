import React, {useEffect, useState} from 'react';

/*
 A component to render the form thru which the user enters a new question to add to the Quiz
 they are currently editing;
 @return question, the question the user enters into the field prior to hitting "submit";
*/
function QuestionInputForm() {

  const [questionInput, setQuestionInput] = useState("");

  const question = () => {
    setQuestionInput(questionInput);
  };

  return(
    <div className={QuestionInputForm}>
      <text>Please enter a question.</text>
      <form>
        <input
          value={questionInput}
          onChange={e => setQuestionInput(e.target.value)}
          type="text"
          placeholder="Why do birds sing?"
          name="question"
          required
        />
        <button type="submit" className="submitButton" onClick={question}>Submit your response.</button>
      </form>
    </div>
  );
};

export default QuestionInputForm;