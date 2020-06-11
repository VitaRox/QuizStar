import React, {Component} from 'react';
import axios from 'axios';

export default class Quiz extends Component{
  state = {
      quizzes: []
  }

componentDidMount = () => {
  var id = this.props.match.params._id
  axios.get('/quiz/${id}')
    .then((response)=> {
      const data = response.data;
      this.setState({quizzes:data});
      })
    .catch((err) =>{
        console.log(err.message);
      });
}

displayQuiz = (quiz) => {
  if(!quiz.length) return null;
  return quiz.map((quiz, index) =>(
    <div key ={index}>
      <h4 className="quiz">{quiz}</h4>
    </div>
  ));
};

render()
{
         return (
           <div className="main-content">
             </div>
       )
     }
}
