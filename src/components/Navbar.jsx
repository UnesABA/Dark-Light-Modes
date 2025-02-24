import React from 'react'

const Navbar = (props) => {
  return (
    <div className= {props.darkMode ? "dark-navbar" : "navbar"}>
      <div className= "navbar-logo-title">
        <img src="react-logo.png" className= "navbar-react-logo-pic" alt="React Logo" />
        <h1 className= "navbar-title">ReactFacts</h1>
      </div>
      
      <div className= "theme-switch-wrapper">
        <h3>Light</h3>
        <label className= "theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onClick= {props.toggleDarkMode}/>
          <div className= "slider"></div>
        </label>
        <h3>Dark</h3>
      </div>

    </div>
  )
}

export default Navbar