import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'


class List extends React.Component{

  
  render() {

  const { list, contData } = this.props
    // console.log(contData)
    return(
    <div className="list-wrapper">
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

export default List