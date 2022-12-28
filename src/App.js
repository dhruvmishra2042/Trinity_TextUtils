
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom'; 
 

 function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] =  useState(null); 

  const showAlert =(message, type)=> {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    },1500); 
   
  }
  
  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success"); 
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success"); 
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "Trinity" mode= {mode} toggleMode={toggleMode} />
    <Alert alert={alert} mode={mode}></Alert>
    
    <div className='container my-4'>
      <Routes>
        <Route path='/about' element={<About mode={mode}/>} / >
        
        <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
      </Routes>
      </div>
      </Router> 
   
    
  
     </>
  );
}


export default App;
