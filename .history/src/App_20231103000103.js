import React from 'react';
import './App.css';
import Main from './Components/Main';
import { Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {< Main />} />
      </Routes>
    </Router>
  );
}

export default App;
