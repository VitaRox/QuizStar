import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './styles/App.css';
import UsernameForm from './components/UsernameForm';
import QuizStarHeader from './components/QuizStarHeader';
import QuizNameInputForm from './components/QuizNameInputForm';
import QuestionInputForm from './components/QuestionInputForm';
import OptionInputForm from './components/OptionInputForm';
// eslint-disable-next-line no-unused-vars
import PasswordEntryForm from './components/PasswordEntryForm';
// import OptionDisplay from
import Switch from './components/Switch';


function App() {

  // Here we will define our instance of our OptionDisplay;
  // This will only be available in CreateQuiz or TakeQuiz views;
  // const optionDisplay = <OptionDisplay />;

  return (
    <div className="demo-big-content">
      <h2></h2>
      <body>
        <UsernameForm />
        <PasswordEntryForm />
        <QuizNameInputForm />
        <QuestionInputForm/>
        <OptionInputForm/>
        <Switch />
      </body>

      {/*<Router>*/}
      {/*  <Layout>*/}

      {/*    <Header className="header_Color" title="QuizStar" scroll>*/}
      {/*      <Navigation>*/}
      {/*        <Link to="/Login">Login</Link>*/}
      {/*        <Link to="/Profile">Profile</Link>*/}
      {/*        <Link to="/CreateQuiz">Create Quiz</Link>*/}
      {/*        <Link to="/TakeQuiz">Take Quiz</Link>*/}

      {/*      </Navigation>*/}
      {/*    </Header>*/}
      {/*    <Drawer title="QuizStar">*/}
      {/*      <Navigation>*/}
      {/*        <Link to="/Login">Login</Link>*/}
      {/*        <Link to="/Profile">Profile</Link>*/}
      {/*        <Link to="/CreateQuiz">Create Quiz</Link>*/}
      {/*        <Link to="/TakeQuiz">Take Quiz</Link>*/}
      {/*      </Navigation>*/}
      {/*    </Drawer>*/}
      {/*    <Content>*/}
      {/*      <div>*/}
      {/*        <Route path="/" exact strict component={Home}/>*/}
      {/*        <Route path="/Login" exact strict component={Login}/>*/}
      {/*        <Route path="/Profile" exact strict component={Profile}/>*/}
      {/*        <Route path="/CreateQuiz" exact strict component={QuizCreate}/>*/}
      {/*        <Route path="/TakeQuiz" exact strict component={QuizTake}/>*/}
      {/*      </div>*/}
      {/*    </Content>*/}
      {/*  </Layout>*/}
      {/*</Router>*/}
    </div>
  );
}

export default App;

