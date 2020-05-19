import React, {Component} from 'react';
import axios from 'axios';
import ListSubject from './SubjectList';

class Subject extends Component {
    state = {
        subjects: []
    }

componentDidMount(){
  this.getSubjects();
}

getSubjects = () => {
  axios.get('http://localhost:3000/api/subjects')
    .then(res => {
      if(res.data){
        this.setState({
          subjects:res.data
        })
      }
    })
    .catch(err => console.log(err))
}


render(){

  return(
    <div>
      <h1>Subjects</h1>
      <ListSubject/>
    </div>
   )
 }
}

export default Subject;
