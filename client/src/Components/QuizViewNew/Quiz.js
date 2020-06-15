import React, {Component} from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react'

export default class Quiz extends Component{
constructor (props){
  super(props);
  this.state = {quiz:{ }}
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
const { quiz } = this.state;

           return (
             <Container>
           <div>{quiz.quizName}
           <div>{quiz.questions}</div>
           </div>
           </Container>

       )
     }
}
