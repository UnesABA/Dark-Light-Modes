import Navbar from "./components/Navbar"
import MainSection from "./components/MainSection"
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)  
  }

  return (
    <>
      <Navbar darkMode= {darkMode} toggleDarkMode= {toggleDarkMode}/>
      <MainSection darkMode= {darkMode} />
    </>
  )
}

export default App
