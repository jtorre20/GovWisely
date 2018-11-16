import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dropdown from './containers/Dropdown'

const healthObj = ''

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

  updateDropdown = (option) => {
    this.setState({dropdownSelection: option})
  }


  render() {
    return (
      <div className="App">
        < Dropdown dropdownOpt={this.updateDropdown}/>
      </div>
    );
  }
}

export default App;
