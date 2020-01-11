import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import NavContainer from "./containers/Nav";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavContainer></NavContainer>
      <Article></Article>
    </div>
  );
}

export default App;
