import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import UsersIndex from './Users/Index';
import UsersDetail from './Users/Detail';
import BooksIndex from './Books/Index';
import ConferencesIndex from './Conferences/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar /><hr/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Users/' component={UsersIndex}/>
          <Route exact path='/Users/:id/show' component={UsersDetail}/>
          <Route exact path='/Books/' component={BooksIndex}/>
          <Route exact path='/Conferences/' component={ConferencesIndex}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
