import React, { useReducer, useState } from "react"
import Todo from "./Todo"
import { todoReducer } from "../../reducers/todoReducer"

const TodoList = props => {
  const [state, dispatch] = useReducer(props.todoReducer, props.initialState)
  return (
    <>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        >
        </input>
        <button >Add Todo</button>
        <button onClick={this.clearCompleted}>Clear completed</button>
      </form>
      <div>
        {state.map(item => {
          return (
            // <Todo key={item.todo} item={item} toggleTodo={props.toggleTodo} />
            <div
              onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
              className={`item${item.completed ? " completed " : ""}`}
            >
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TodoList
