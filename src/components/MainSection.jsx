import React from 'react'

const MainSection = (props) => {
  return (
    <div className= {props.darkMode ? "dark-main-section" : "main-section"}>
      <h1 className= {props.darkMode ? "dark-main-section-title" : "main-section-title"}>
        Fun facts about React
      </h1>
        <ul>
          <li className= {props.darkMode ? "dark-main-section-facts" : "main-section-facts"}>
            Was first released in 2013
          </li>
          <li className= {props.darkMode ? "dark-main-section-facts" : "main-section-facts"}>
            Was originally created by Jordan Walke
          </li>
          <li className= {props.darkMode ? "dark-main-section-facts" : "main-section-facts"}>
            Has well over 100K stars on GitHub
          </li>
          <li className= {props.darkMode ? "dark-main-section-facts" : "main-section-facts"}>
            Is maintained by Facebook
          </li>
          <li className= {props.darkMode ? "dark-main-section-facts" : "main-section-facts"}>
            Powers thousands of entreprise apps, including mobile apps
          </li>
        </ul>
      
    </div>
  )
}

export default MainSection