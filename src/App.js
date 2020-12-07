import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import UsersIndex from './Users/Index';
import BooksIndex from './Books/Index';
import ConferencesIndex from './Conferences/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar /><hr/>
          <Route exact path='/' component={Home}/>
          <Route path='/About' render={ () => <About name={'Tom'}/> }/>
          <Route path='/Users/' render={ () => <UsersIndex name={'Tom'}/> }/>
          <Route path='/Books/' render={ () => <BooksIndex name={'Tom'}/> }/>
          <Route path='/Conferences/' render={ () => <ConferencesIndex name={'Tom'}/> }/>
        </div>
      </Router>
    </div>
  );
}

export default App;
