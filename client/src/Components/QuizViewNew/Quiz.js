import React, {Component} from 'react';
import axios from 'axios';

export default class Quiz extends Component{
  state = {
      quiz: []
  };

componentDidMount = () => {
  this.getQuestions();
}

getQuestions = () =>{
  var id = this.props.match.params.id
  axios.get('/quiz/${id}')
    .then((response)=> {
      const data = response.data;
      this.setState({quizzes:data});
      })
    .catch((err) =>{
        console.log(err.message);
      });
 };


render()
{
         return (
           <div>
           {this.state.quiz.map((item)=>
               <div>
               <h3>{item.questions}</h3>
               <ul>
               {item.answers.map((sub)=>
                 <li>{sub.question}</li>
               )}
               </ul>
               </div>
             )}
          </div>
       )
     }
}
