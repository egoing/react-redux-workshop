import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      
      <Header></Header>

      <Nav></Nav>

      <Article></Article>

    </div>
  );
}

export default App;
