
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
function App() {
  const [mode,setMode]=useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    {/* <Navbar /> */}
    <Navbar  title="Textuti2" aboutText="site about"  mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <TextForm heading ="text util react project" mode={mode}/>
    {/* <About/> */}
    </div>
    
    </>
 
    
  );
}

export default App;
