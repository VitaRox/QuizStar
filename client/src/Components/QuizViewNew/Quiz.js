import React, {Component} from 'react';
import axios from 'axios';
import QuestionBox from "./QuestionBox";
import Result from "./Results";

export default class Quiz extends Component{
  state = {
      quiz: [],
      score:0,
      responses:0
  };

componentDidMount = () => {
  this.getQuestions();
}

getQuestions = () =>{
  var id = this.props.match.params._id
  axios.get('/quiz/${id}')
    .then((response)=> {
      const data = response.data;
      this.setState({quizzes:data});
      })
    .catch((err) =>{
        console.log(err.message);
      });
 };

computeAnswer = (answer, correctAnswer) => {
    if(answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < this.state.questions ? this.state.responses + 1 : this.state.questions
    });
  };

  playAgain = () => {
  this.getQuestions();
  this.setState({
    score:0,
    responses:0
  });
};




render()
{
         return (
           <div className="quiz-container">
        {this.state.quiz.map(item =>
          {item.answers.map(subItem =>
            <QuestionBox
            key={subItem.question}
            question={subItem.question}
            options={subItem.answers}
            />
            )}
          )}


           {this.state.responses === this.state.questions ? (
             <Result score={this.state.score} playAgain={this.playAgain}/>
           ): null}
      </div>
       )
     }
}
