import React, {Component} from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react'

export default class Quiz extends Component{
constructor (props){
  super(props);
  this.state = {quiz:[]}
}

componentDidMount = () => {
  this.getQuestions();
}

getQuestions = () =>{
  var id = this.props.match.params.id
  axios.get(`/quiz/${id}`)
    .then(({data: quiz})=> {
      this.setState({quiz});
      })
    .catch((err) =>{
        console.log(err.message);
      });
 }


render(){

           return (
             <Container>
           <div>{this.state.quiz.quizName}
           <div>{this.state.quiz.quizCreator}
           <ul>
           {this.state.quiz.questions.map((item, i) =>{
             return <li key={i}>{item.question}</li>
           })}
           </ul>
           </div>
           </div>
           </Container>

       )
     }
}
