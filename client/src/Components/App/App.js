import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from "../Login/index";
import Profile from "../Profile/index";
import QuizCreate from "../QuizCreate/index";
import QuizTake from "../QuizTake/QuizView";
import Home from "../Home/index"
import UsernameForm from '../LoginComponents/UsernameForm';
import QuizStarHeader from '../QuizStarHeader';
import QuizNameInputForm from '../QuizCreateComponents/QuizNameInputForm';
import QuestionInputForm from '../QuizCreateComponents/QuestionInputForm';
import OptionInputForm from '../QuizCreateComponents/OptionInputForm';
import PasswordForm from '../LoginComponents/PasswordForm';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Subject from "../Subject/SubjectList";
import QuizView from "../QuizView/QuizView.js"

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
              <Route path="/" exact strict component={Home} />
              <Route path="/Login" exact strict component={Login} />
              <Route path="/Profile"  exact strict component={Profile} />
              <Route path="/subjects"  exact strict component={Subject} />
              <Route path="/CreateQuiz" exact strict component={QuizCreate} />
              <Route path="/quiz" exact strict component={QuizTake} />
              <Route path="/quizView" exact strict component={QuizView} />
            </div>
        </Content>
    </Layout>
     </Router>
</div>
  );
}

export default App;
