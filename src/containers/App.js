import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import './App.css';


class App extends Component{
  constructor(){
      super();
      this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    document.title = 'Robot Friends';

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {this.setState( {robots: users} )})
  }

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
  }

  render(){
    const filterdRobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(!this.state.robots){
      return <h1 className='tc'>Loading...</h1>
    }
    else{
      return (
        <div className='tc'>
          <h1>Robot Friends</h1>
          <SearchBox searchChange= {this.onSearchChange}/>
          <Scroll>
            <CardList robots={filterdRobot} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
