import React, {Component} from 'react';
import axios from 'axios';

export default class Subject extends Component {
    state = {
        subject: []
    }

componentDidMount(){
  this.getSubjects();
}

getSubjects = () => {
  axios.get('http://localhost:3000/api/subjects')
    .then(res => {
      if(res.data){
        this.setState({
          subject:res.data
        })
      }
    })
    .catch(err => console.log(err))
}
render()
    {
          return (<div className="subject-content">
              {this.state.subject.map(subject => <li key = {subject.id}> Subject {subject.subjectName}<br></br></li>)}
              </div>
        )

    }
}
