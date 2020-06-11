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


render()
{
         return (
           <div className="main-content">
             {this.state.quizzes.map((item)=>
               <div>
               <h3>{item.quizName}</h3>
               <ul>
               {item.questions.map((sub)=>
                 <li>{sub.question}</li>
               )}
               </ul>
               </div>
             )
             }
             </div>
       )
     }
}
