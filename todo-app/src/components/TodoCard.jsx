// import React from 'react'

export function TodoCard(props) {

  const { task, handleTodoDelete, todoIndex, handleTodoComplete } = props
  // const task = todos[todoIndex]
  //console.log(task)

  return (
    <div className="card todo-item">
      <p>{task.input}</p>

      <div className="todo-buttons">
        <button onClick={()=>{
          handleTodoComplete(todoIndex)
        }}
        disabled={task.complete}>
          <h6>Done</h6>
        </button>
        <button onClick={()=>{
          handleTodoDelete(todoIndex)
        }}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )

}
