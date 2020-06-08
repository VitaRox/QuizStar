import React, { Component } from 'react';
import axios from 'axios';


export default class AddQuiz extends Component {
      state = {
          quizzes: []
      }


handleChange = event => {
      const value = event.target.value;
      this.setState({
          ...this.state,
        [event.target.name]: value
      });
}

handleSubmit = event => {
    //event.preventDefault();

    axios.post('/add-quiz', this.state)
      .then(res => {
          console.log(res);
          console.log(res.data);
      })
}

render(){
    return(
        <div className="addQuiz-form">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Quiz Name:
                    <input type="text" name="quizName"
                    defaultValue={this.state.quizName}
                    value={this.state.quizName} onChange={this.handleChange} />
                </label><br></br>

                <label>
                    Quiz Creator
                    <input type="text" name="quizCreator"
                    defaultValue={this.state.quizCreator}
                    value={this.state.quizCreator} onChange={this.handleChange} />
                </label><br></br>

                <label><br></br>
                    Question:
                    <input type="text" name="question" value={this.state.question} onChange={this.handleChange} />
                </label><br></br>
                <label><br></br>
                    Add Answers:
                    <input type="text" name="answer1" value={this.state.answer1} onChange={this.handleChange} />
                </label><br></br>
                <label><br></br>
                    Add Answer:
                    <input type="text" name="answer2" value={this.state.answer2} onChange={this.handleChange} />
                </label><br></br>
                <label><br></br>
                    Add Answer:
                    <input type="text" name="answer3" value={this.state.answer3} onChange={this.handleChange} />
                </label><br></br>
                <label><br></br>
                    Add Answer:
                    <input type="text" name="answer4" value={this.state.answer4} onChange={this.handleChange} />
                </label><br></br>
                <label><br></br>
                    Correct Answer:
                    <input type="text" name="correct" value={this.state.correct} onChange={this.handleChange} />
                </label><br></br>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
 }
}
