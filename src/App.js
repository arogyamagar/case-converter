import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");
  const [name, setName] = useState("Enable DarkMode");
  const toggleMode = () =>{
    if (mode === "light"){
      setMode('dark')
      setName('Disable DarkMode')
      document.body.style.backgroundColor="black";
    }
    else{
      setMode('light')
      setName('Enable DarkMode')
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    <Navbar title="Case Converter" name= {name} mode={mode} toggleMode = {toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter The Text Below" mode={mode}/>
    </div>
    </>
    );
}

export default App;
