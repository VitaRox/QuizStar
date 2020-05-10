import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "../Login/index";
import Profile from "../Profile/index";
import QuizCreate from "../QuizCreate/index";
import QuizTake from "../QuizTake/index";
import Home from "../Home/index";

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

const App = () => {
  return (
    <div className="demo-big-content">
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
              <Route path="/" exact strict component={Home} />
              <Route path="/Login" exact strict component={Login} />
              <Route path="/Profile" exact strict component={Profile} />
              <Route path="/CreateQuiz" exact strict component={QuizCreate} />
              <Route path="/TakeQuiz" exact strict component={QuizTake} />
            </div>
          </Content>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
