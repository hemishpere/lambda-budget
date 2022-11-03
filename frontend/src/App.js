import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Budget from "./Component/Budget/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Budget/>} />
        </Routes>
    </Router>
    );
  }
}

export default App;