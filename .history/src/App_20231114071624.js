import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Menu from './Components/Menu';
import Footer from './Components/Footer';




function App() {
  return (
    <>
      <Nav/>
      <div 
          style={{
            overflowY: "scroll",
            height: "800px",
          }}
        ></div>  
      <Main/>
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;
