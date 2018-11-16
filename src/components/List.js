import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Header from './Header'
import ListItem from './ListItem'

class List extends React.Component{

  constructor(){
    super(props)

    // this.state = {
    //   option: [
    //     {
    //       id: 0,
    //       title: 'Objects',
    //       selected: false,
    //       key: 'option'
    //     },
    //     {
    //       id: 1, 
    //       title: 'Content',
    //       selected: false,
    //       key: 'option'
    //     }
    //   ]
    // }
  }
  

  render() {

    return(
    <div className="dd-wrapper">
      <div className="dd-header">
        <div className="dd-header-title">Hi</div>
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