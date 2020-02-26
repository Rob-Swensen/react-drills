import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component{
  constructor(){
    super();
    this.state = {
      tasks: [],
      userInput: '',
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

handleUserInput(val){
  this.setState({userInput: val});
}

handleAddTask(){
  this.setState({
    tasks: [...this.state.tasks, this.state.userInput],
    userInput: ''
  });
}


  render(){
    console.log(this.state.tasks)
    let list = this.state.tasks.map((element, index) => {return <Todo key={index} task={element} />;});
    return(
      <div>
        <h1>To Do List:</h1>
        <div>
          <input value={this.state.userInput} placeholder='Enter new task' 
          onChange={(e) => this.handleUserInput(e.target.value)}/>
          <button onClick={this.handleAddTask}>Add</button>
        </div>
        <br/>
        {list}
      </div>
    )
  }
}

export default App;
