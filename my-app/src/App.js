
// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const toggleMode = () => {
    if(mode==='light'){
      setMode('Dark')
      document.body.style.backgroundColor = 'black'
  }
  else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
  }
}
  return (
    <>
    
<Navbar tittle="SURU" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextForm heading="Enter the text Analyze"/>
</div>
</>
  );
}
export default App;
