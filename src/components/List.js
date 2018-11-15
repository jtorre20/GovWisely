import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'

class List extends React.Component{


  render() {

    return(
    <div className="dd-wrapper">
      <div className="dd-header">
        <div className="dd-header-title"></div>
      </div> 
      <ul className="dd-list">
        <li className="dd-list-item"></li>
        <li className="dd-list-item"></li>
        <li className="dd-list-item"></li>
      </ul>
    </div>
    )
  }
}