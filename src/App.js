import React, {useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [name, setName] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if (mode === "light"){
      setMode('dark')
      setName('Disable DarkMode')
      document.body.style.backgroundColor="black";
      showAlert("Dark mode has been Enabled", "success");
    }
    else{
      setMode('light')
      setName('Enable DarkMode')
      document.body.style.backgroundColor="white";
      showAlert("Dark mode has been Disabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar name= {name} mode={mode} toggleMode = {toggleMode} />  
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
      <Route exact path="/about">
        <About mode={mode}/>
      </Route>
      <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter The Text Below" mode={mode}/>
      </Route>
    </Switch>
    </div>
    </Router>
    </>
    );
}

export default App;
