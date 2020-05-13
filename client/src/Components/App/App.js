import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Router, Route, Link } from "react-router";
import Home from './Views/Home';
import Login from './Views/Login';
import ProfileView from './Views/ProfileView';
import UsernameForm from './components/UsernameForm';
import QuizStarHeader from './components/QuizStarHeader';
import CreateQuiz from './Views/CreateQuiz';
import QuizNameInputForm from './components/QuizNameInputForm';
import QuestionInputForm from './components/QuestionInputForm';
import OptionInputForm from './components/OptionInputForm';
// eslint-disable-next-line no-unused-vars
import PasswordEntryForm from './components/PasswordEntryForm';
// import OptionDisplay from
import TakeQuiz from './Views/TakeQuiz';
import {Drawer} from '@material-ui/core';
import { Layout, Header, Navigation, Content } from 'react-mdl';


function App() {

  return (
    <div className="demo-big-content">
      <QuizStarHeader />

      <UsernameForm />
      <PasswordEntryForm />
      <QuizNameInputForm />
      <QuestionInputForm/>
      <OptionInputForm/>


      <Router>
        <Layout>

          <Header className="header_Color" title="QuizStar" scroll>
            <Navigation>
              <Link to="/Login">Login</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/CreateQuiz">Create Quiz</Link>
              <Link to="/TakeQuiz">Take Quiz</Link>

            </Navigation>
          </Header>
          <Drawer title="QuizStar">
            <Navigation>
              <Link to="/Login">Login</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/CreateQuiz">Create Quiz</Link>
              <Link to="/TakeQuiz">Take Quiz</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div>
              <Route path="/" exact strict component={Home}/>
              <Route path="/Login" exact strict component={Login}/>
              <Route path="/Profile" exact strict component={ProfileView}/>
              <Route path="/CreateQuiz" exact strict component={CreateQuiz}/>
              <Route path="/TakeQuiz" exact strict component={TakeQuiz}/>
            </div>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;