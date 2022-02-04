import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
    <Navbar title="My App" about="About me" name= {name} mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter The Text Below" mode={mode}/>
    </div>
    </>
    );
}

export default App;
