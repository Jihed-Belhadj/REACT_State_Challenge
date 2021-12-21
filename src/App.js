import './App.css';
import React from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';

class App extends React.Component{

   state={todos : [{id : 0, task : "EATING", done :false},{id : 1, task : "SLEEPING", done :false},{id : 2, task : "REPEAT", done :false}], text:""}
// ---------------
   addTodos=()=>{ this.setState({todos : [...this.state.todos, {id : Math.random(), task : this.state.text, done :false}]})  }
   deleteTodos=(id)=>{ this.setState({ todos :this.state.todos.filter(el=>el.id!==id) })    }
   doneTodos=(id)=>{this.setState({todos : this.state.todos.map(el=>el.id===id ?{ ...el, done:!el.done}:el)})}
  render(){
    console.log(this.state.todos)
    return(
      
      <div className='App'>
      <h1>TO DO LIST</h1>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="What are you going to do"
      aria-label="Task"
      aria-describedby="basic-addon2"
      onChange={(event)=>this.setState({text : event.target.value.toUpperCase() })}
    />
    <Button variant="primary" onClick={ ()=>this.addTodos()} id="button-addon2">
      ADD TO MY TO DO LIST
    </Button>
  </InputGroup>
      {this.state.todos.map(el=>
      <div key= {el.id} >
            <h3  style={{textDecoration : el.done ?"line-through":null}}>{el.task}</h3> 
            <Button variant="outline-danger" onClick={()=>this.deleteTodos(el.id) }>Delete</Button>
            <Button variant="outline-success" onClick={()=>this.doneTodos(el.id)}>D o n e</Button>
            
      </div>
        )}
      </div>
    )
  }
}

export default App;
