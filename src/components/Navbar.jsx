import React from 'react'

const Navbar = () => {
  return (
    <div className= "navbar">
      <div className= "navbar-logo-title">
        <img src="react-logo.png"  className= "navbar-react-logo-pic" alt="React Logo" />
        <h1 className= "navbar-title">ReactFacts</h1>
      </div>
      
      <div className= "theme-switch-wrapper">
        <h3>Light</h3>
        <label className= "theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className= "slider round"></div>
        </label>
        <h3>Dark</h3>
      </div>

    </div>
  )
}

export default Navbar