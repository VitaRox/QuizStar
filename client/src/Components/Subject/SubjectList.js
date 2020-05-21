import React, {Component} from 'react';
import axios from 'axios';
import SubjectCarousel from './Carousel';
//import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';

export default class Subject extends Component {
    state = {
        subjects: []
    }

componentDidMount = () => {
  this.getSubjects();
}

getSubjects = () => {
  axios.get('/subjects')
    .then((response)=> {
      const data = response.data;
      this.setState({subjects:data});
      })
    .catch(() =>{
      alert('Error retrieving data!!!!');
    });
};

displaySubjects = (subjects) => {
  if(!subjects.length) return null;
  return subjects.map((subject, index) =>(
    <div key ={index}>
      <h3>subject.subjectName</h3>
    </div>
  ));
};

render()
    {
          return (
            <div>
            <div><SubjectCarousel/></div>
            <div className="subject-content">
              {this.displaySubjects(this.state.subjects)}
              </div>
              </div>
        );
    }
}
