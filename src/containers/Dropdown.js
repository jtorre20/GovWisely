import React, { Component } from 'react';
// import { Component } from "react";
// import { Redirect, withRouter } from 'react-router-dom'
// import List from '../components/List.'
import onClickOutside from 'react-onclickoutside';
// import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Dropdown extends Component {

    constructor(props){
      super(props)
      this.state = {
        listOpen: false,
        headerTitle: this.props.title
      }
    }

    handleClickOutside(){
      this.setState({
        listOpen: false
      })
    }

    toggleList(){
      this.setState(prevState => ({
        listOpen: !prevState.listOpen
      }))
    }

  render() {
    // const { header } = this.props
    const { list } = this.props
    const { listOpen, headerTitle } = this.state

    return(
      <div className="dd-wrapper">
      <div className="dd-header" onClick={() => this.toggleList()}>
        <div className="dd-header-title">{headerTitle}</div>
        {listOpen 
        ? <FontAwesomeIcon icon="angle-up" size="2x" />
        : <FontAwesomeIcon icon="angle-down" size="2x" />
      }
      </div> 
        {listOpen && <ul className="dd-list">
          {list.map((item) => (
            <li className="dd-list-item" key={item.id}>{item.title}
            </li>
            
            ))}
        {/* <li className="dd-list-item"></li>
        <li className="dd-list-item"></li> */}
      </ul>}
    </div>
      // < List >
    )
  }
}

export default Dropdown