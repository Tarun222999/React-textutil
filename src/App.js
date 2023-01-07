
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout( ()=>{
      setAlert(null)
    },1500)
  }
  const removeBodyCls=()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-danger');
  }
  const toggleMode =(cls)=>{
    removeBodyCls();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enable ","success");
      document.title="React App Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable ","success");
      document.title="React App Dark Mode";
    }
  }
  return (
    <>
    {/* <Navbar /> */}
    <BrowserRouter>
    <Navbar  title="Textuti2" aboutText="site about"  mode={mode} toggleMode={toggleMode}/>
    <Alert  alert={alert}/>
    <div className="container">
    
      <Routes>
        <Route exact  path="/" element={ <TextForm heading ="text util react project" mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
   
    {/* <TextForm heading ="text util react project" mode={mode} showAlert={showAlert}/> */}
    
    </div>
    </BrowserRouter>
    </>
 
    
  );
}

export default App;
