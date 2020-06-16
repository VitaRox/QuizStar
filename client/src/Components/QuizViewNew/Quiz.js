import React, {Component, useState} from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react'

export default class Quiz extends Component{
constructor (props){
  super(props);
  this.state = {quiz:[], score:0,
  responses:0 }
}

componentDidMount = () => {
  this.getQuestions();
}

computeAnswer = (answer, correctAnswer) => {
  if(answer === correctAnswer) {
    this.setState({
      score: this.state.score + 1
    });
  }
  this.setState({
    responses: this.state.responses < 5 ? this.state.responses + 1 : 5
  });
};

getQuestions = () =>{
  const {match: {params}} = this.props;
  axios.get(`/quiz/${params.id}`)
    .then(({data: quiz})=> {
      this.setState({quiz});
      })
    .catch((err) => {
        console.log(err.message);
      });
 }

 onClick = e => {
   this.btnReview.setAttribute("disabled", "disabled");
 }

 render(){
    const { quiz } = this.state;
    if(typeof quiz.quizName !== 'undefined'){
      let questionTags = [];
      for(var n = 0; n < quiz.questions.length; n++){
        let questionObject = quiz.questions[n];
        let answerTags = [];
        for(var m = 0; m < questionObject.answers.length; m ++){
          let answerObject = questionObject.answers[m];
          answerTags.push(<button
            id={answerObject.id}
            className="answerBtn"
            selected={answer => this.computeAnswer(answer, questionObject.correctAnswer)}
            >
            {answerObject.answer}
          </button>)
        }
        questionTags.push(<div className="questionBox">{questionObject.question}</div>)
        questionTags.push(<div>Correct Answer: {questionObject.correctAnswer}</div>)
        questionTags.push(<div>{answerTags}</div>)
      }
      return (
      <Container>
        <div className="title">Quiz Name: {quiz.quizName}</div>
        <div>  {questionTags} </div>


      </Container>
      )
    } else {
    return (
      <h1></h1>
      )
    }
  }
}
