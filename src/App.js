import React, { useState, useReducer } from 'react';
import './App.css';
import { todoReducer, initialState } from "./reducers/todoReducer"

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const [newTodoTitle, setNewTodoTitle] = useState("")

  const markTodo = (id) => {

    dispatch({ type: "TOGGLE_COMPLETED", derp: id })
  }

  const handleChanges = e => {
    setNewTodoTitle(e.target.value)
  }
  return (
    <>
      <form >
        <input
          type="text"
          name="newTodoTitle"
          value={newTodoTitle}
          onChange={handleChanges}
        >
        </input>
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch({ type: "ADD_TODO", derp: newTodoTitle })
          }}
        >
          Add Todo
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch({ type: "REMOVE_TODO" })
          }}
        >
          Clear completed
        </button>
      </form>
      <div>
        {state.map(item => {
          return (
            // <Todo key={item.todo} item={item} toggleTodo={props.toggleTodo} />
            <div key={item.id}
              onClick={() => {
                console.log(item)
                console.log(item.completed)
                markTodo(item.id)
              }
              }
            >
              <p className={item.completed ? "completed " : null}>{item.item}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App;
