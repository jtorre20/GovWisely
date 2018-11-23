import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Dropdown from './containers/Dropdown'
import List from './components/List'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faAngleUp, faCheck} from '@fortawesome/free-solid-svg-icons'
// import './App.css';

library.add(fab, faAngleDown, faAngleUp, faCheck)

const healthIndex = 'https://www.healthcare.gov/api/index.json'
var cache = {}

// function once(fn, context) { 
// 	var result;

// 	return function() { 
// 		if(fn) {
// 			result = fn.apply(context || this, arguments);
// 			fn = null;
// 		}

// 		return result;
// 	};
// }

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
      ],
      data: [],
      showList: false
    }
    // debugger
  }

  componentDidMount() {
    // if(title === "Index" || title === "Objects" || title === "Content"){
      fetch(healthIndex)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        // let updatedState =  []
        this.setState({ data })
        })
        // .catch(error => console.log(error)) 
      // }
  }

  // handleFetch = (title) => {
  //   if(title === "Index" || title === "Objects" || title === "Content"){
  //     fetch(healthIndex)
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log(data)
  //       // let updatedState =  []
  //       this.setState({ data })
  //       })
  //       // .catch(error => console.log(error)) 
  //     }
  //   }

    // onlyOnce = (title) => {
    //   once(this.handleFetch(title))
    // }


    
    
    
    updateShowList = () => {
      this.setState({
        showList: true
      })
      
    }

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
        < Dropdown title="Select Option" list={this.state.options} resetThenSet={this.resetThenSet}
         handleFetch={this.onlyOnce} updateShowList={this.updateShowList}/>
        
        {this.state.showList ?
        < List showList={this.state.showList} contData={this.state.data}  /> : ""
        }
    
        </div>
      </div>
    );
  }
}

export default App;


