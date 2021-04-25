import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Switch,Route, Redirect } from 'react-router';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';



function App() {
  return (
    <>
    <Navbar/> 
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/services' component={Services}/>
    <Route path='/contact' component={Contact}/>
    <Redirect to='/'/>
    </Switch>
    </>
  );
}

export default App;
