import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<News category='general'/>}></Route>
          <Route path="/business" element={<News category='business'/>}></Route>
          <Route path="/sports" element={<News category='sports'/>}></Route>
        </Routes>
    </Router>
    </>
  );
  }
}

