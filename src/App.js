import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
// import './styles/stylus/dropdown.styl'
import Dropdown from './containers/Dropdown'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faAngleDown, faAngleUp)

// const healthObj = ''

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      option: [
        {
          id: 0,
          title: 'Objects',
          selected: false,
          key: 'option'
        },
        {
          id: 1, 
          title: 'Content',
          selected: false,
          key: 'option'
        },
        {
          id: 2,
          title: "Index",
          selected: false,
          key: 'option'
        }
      ]
    }
  }

  // updateDropdown = (option) => {
  //   this.setState({dropdownSelection: option})
  // }


  render() {
    return (
      <div className="App">
        <div className="wrapper">
        < Dropdown title="Select option" list={this.state.option}/>
        </div>
      </div>
    );
  }
}

export default App;
