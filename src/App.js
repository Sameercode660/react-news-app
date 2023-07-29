import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'
import { useState } from 'react';
import React from 'react';

function App() {
   
  const [mode, setMode] = useState('white')

  function switchToDark()
  {
    if(mode==='white')
    {
      document.body.style.backgroundColor = 'black'
      setMode('dark')
    }
    else
    {
      document.body.style.backgroundColor = 'white'
      setMode('white')
    }
  }
  
  return (
     <>
       <Navbar switchToDark={switchToDark}/>
       <div className="container">
        <News></News>
       </div>
     </>
  );
}

export default App;
