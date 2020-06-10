import React, {Component} from 'react';
import { Container, List } from 'semantic-ui-react'
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

export default class AllQuizView extends Component{
  state = {
      quizzes: []
  }

componentDidMount = () => {
  axios.get('/quiz')
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
        <Container>
          <List className= "ui selection middle aligned list">
              {this.state.quizzes.map(item => <List.Item key={item.quizName}>Creator: {item.quizCreator}
            <List.Content><List.Header>{item.quizName}</List.Header></List.Content></List.Item>)}
          </List>
        </Container>
       )
     }
}
