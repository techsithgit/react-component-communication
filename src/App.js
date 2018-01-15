import React, { Component } from 'react';
import './App.css';
import Parent from './components/parentToChild/parent';

class App extends Component {
  state = {
    title:'placeholder title'
  }

  changeTheWorld = (newTitle) => {
      this.setState({title:newTitle});
  }

  render() {
    return (
      <div className="App">
         <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')} 
         keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}
         title={this.state.title}/>
      </div>
    );
  }
}

export default App;
