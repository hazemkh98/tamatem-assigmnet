import React from 'react'
import "./WelcomePage.css"

function WelcomPage(props) {

    function formateEmail(email){
        return email.substring(0, email.indexOf('@'));
    }

  return (
    <div className="welcome-message">
          <p>Welcome, <b>{formateEmail(props.email)}</b> 🖐🏻</p>
        </div>
  )
}

export default WelcomPage