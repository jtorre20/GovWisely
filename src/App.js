import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Dropdown from './containers/Dropdown'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faAngleUp, faCheck} from '@fortawesome/free-solid-svg-icons'
// import './App.css';

library.add(fab, faAngleDown, faAngleUp, faCheck)

// const healthObj = ''

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      options: [
        {
          id: 0,
          title: 'Objects',
          selected: false,
          key: 'options'
        },
        {
          id: 1, 
          title: 'Content',
          selected: false,
          key: 'options'
        },
        {
          id: 2,
          title: "Index",
          selected: false,
          key: 'options'
        }
      ]
    }
  }

  // key = "options"
    // refers to this.state.options || this.state[key]
  
  // toggleSelected(id, key){
  //   let temp = this.state[key]
  //   temp[id].selected = !temp[id].selected
  //   this.setState({
  //     [key]: temp
  //   })
  // }

  resetThenSet = (id, key) => {
    // let temp = JSON.parse(JSON.stringify(this.state[key]))
    let temp = this.state[key]
    temp.forEach(item => item.selected = false)
    temp[id].selected = true
    this.setState({
      [key]: temp
    })
  }
  
  
  render() {
    // debugger
    return (
      <div className="App">
        <div className="wrapper">
        < Dropdown title="Select Option" list={this.state.options} resetThenSet={this.resetThenSet}/>
        </div>
      </div>
    );
  }
}

export default App;
