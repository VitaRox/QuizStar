import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "../Login/index";
import Profile from "../Profile/index";
import QuizCreate from "../QuizCreate/index";
import AllQuizView from "../Quizzes/Quizzes";
import QuizView from "../QuizView/QuizView.js";
import QuizStarHeader from "../QuizStarHeader";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Subject from "../Subject/SubjectList";

const App = () => {
  return (
    <div className="demo-big-content">
      <Router>
        <Layout>
          <Header className="header_Color" title="QuizStar" scroll>
            <Navigation>
              <Link to="/Login">Login</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/subjects">Browse Subjects</Link>
              <Link to="/CreateQuiz">Create Quiz</Link>
              <Link to="/quiz">Quizzes</Link>
              <Link to="/quizView">Take Quiz Temp</Link>
            </Navigation>
          </Header>
          <Drawer title="QuizStar">
            <Navigation>
              <Link to="/Login">Login</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/subjects">Browse Subjects</Link>
              <Link to="/CreateQuiz">Create Quiz</Link>
              <Link to="/quiz">Quizzes</Link>
              <Link to="/quizView">Take Quiz Temp</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div>
              <Route path="/" exact strict component={Login} />
              <Route path="/Login" exact strict component={Login} />
              <Route path="/Profile" exact strict component={Profile} />
              <Route path="/subjects" exact strict component={Subject} />
              <Route path="/CreateQuiz" exact strict component={QuizCreate} />
              <Route path="/quiz" exact strict component={AllQuizView} />
              <Route path="/quizView" exact strict component={QuizView} />
            </div>
          </Content>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
