import React, {Component} from 'react';
import axios from 'axios';
import Card from "./CardUI"
import image from '../assets/chem.jpg';
import image2 from '../assets/computer.jpg';
import image4 from '../assets/lit.jpg';
import image5 from '../assets/math.jpg';
import './subject-card-style.css'
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
      <h4 className="card-title">{subject.subjectName}</h4>
    </div>
  ));
};

render()
    {
          return (

            <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                <div className="col-md-4">
                <Card imgsrc={image} title="Chemistry"/>
                </div>
                <div className="col-md-4">
                <Card imgsrc={image2} title="Programming" />
                </div>
                <div className="col-md-4">
                <Card imgsrc={image4}title="English"/>
                </div>
                <div className="col-md-4">
                <Card imgsrc={image5}title="Math"/>
                </div>
                <div className="col-md-4">
                {this.displaySubjects(this.state.subjects)}
                </div>
              </div>
            </div>
        );
    }
}
