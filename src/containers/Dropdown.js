import React, { Component } from 'react';
// import { Component } from "react";
import onClickOutside from 'react-onclickoutside';
import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/css/global.css'

class Dropdown extends Component {

    constructor(props){
      super(props)
      this.state = {
        listOpen: false,
        headerTitle: this.props.title
      }
    }

    handleClickOutside(e){
      this.setState({
        listOpen: false
      })
    }

    selectItem = (title, id, stateKey) => {
      this.setState({
        headerTitle: title,
        listOpen: false
      }, this.props.resetThenSet(id, stateKey))
    }


    toggleList = () => {
      this.setState(prevState => ({
        listOpen: !prevState.listOpen
      }))
    }

  render() {
    // const { header } = this.props
    const { list, toggleItem } = this.props
    const { listOpen, headerTitle } = this.state

    return(
      <div className="dd-wrapper">

      <div className="dd-header" onClick={() => this.toggleList()}>
        <div className="dd-header-title">{headerTitle}</div>
        {/* {listOpen 
        ? <FontAwesome name="angle-up" size="2x" />
        : <FontAwesome name="angle-down" size="2x" />
      } */}
        {listOpen 
        ? <FontAwesomeIcon className="angle" icon="angle-up" size="2x" />
        : <FontAwesomeIcon className="angle" icon="angle-down" size="2x" />
      }
      </div> 

        {listOpen && <ul className="dd-list">
          {list.map((item) => (
      // debugger
            <li className="dd-list-item" key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>{item.title} {item.selected && <FontAwesomeIcon className="check" icon="check" />}
            </li>
            
            ))}
      </ul>}
    </div>
      // < List >
    )
  }
}

export default Dropdown