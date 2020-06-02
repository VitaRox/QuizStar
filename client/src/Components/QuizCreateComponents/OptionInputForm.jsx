import React, {useState, useEffect} from 'react';
import Switch from './Switch';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

/*
  React form for entering an Option;
  An "Option" is the element that defines a choice that can be made on a given quiz.
  These can be used in both the CreateQuiz & TakeQuiz views;

  Generates a form through which user enters the Option &
  a submit button (which bundles the text of the Option into a radio button and adds to the OptionDisplay array);

  @return option, the text defining one of the multiple choices on a given question;
 */
function OptionInputForm() {

  // optionInput corresponds to user input into the field that defines the option they're writing;
  const [optionInput, setOptionInput] = useState("");

  const option = () => {
    setOptionInput(optionInput);
  };

  // Use this in OptionDisplay to check whether the user-selected Option
  // is correct in TakeQuiz view;
  // const [selectedValue, setSelectedValue] = useState('a');

  return(
    <div className="optionInputForm">
      Please type an option into the form below and submit to add it to yr quiz;
      <form>
        <input
          value={optionInput}
          onChange={e => setOptionInput(e.target.value)}
          placeholder="Please enter your option"
          type="text"
          name="option"
          required
        />
        <p>Is this answer the correct answer?</p>
        <Switch />
        <button type="submit" className="submitButton" onClick={option}>Submit your option.</button>
      </form>
    </div>
  );
};

export default OptionInputForm;