import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import NavContainer from "./containers/Nav";
import ArticleContainer from "./containers/Article";
import ControlContainer from './containers/Control';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavContainer></NavContainer>
      <ControlContainer></ControlContainer>
      <ArticleContainer></ArticleContainer>
    </div>
  );
}

export default App;
