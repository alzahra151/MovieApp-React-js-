import React, { Component } from 'react'

export default class TodoRcc extends Component {
    constructor(){
        super();
        this.state={
            todo :{todoContant:""}
        }
        this.addToDo=()=>{
           this.state.todo
            console.log(todo.todoContant)
          }
    }

  render() {
    return (
        <div className="col-10 bg-light m-auto">
        <form className='container'>
        <div className="mb-5">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control w-75 m-auto" 
           onClick={()=>{returnTodo()}} onChange={(e)=>{addToDo(e)}}
           value={todo.todoContant}
           name="todoInput"
           />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <button  className="btn btn-primary m-5">Add ToDo</button>
      </form>
      <div>
        
      </div>
      </div>
    )
  }
}
