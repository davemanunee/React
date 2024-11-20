// import React from 'react'

import { TodoCard } from "./TodoCard"

export function TodoList(props) {

  const { todos, selectedTab, handleTodoDelete, handleTodoComplete } = props

  const tab = selectedTab

  const filteredList= tab ==='All' ?
        todos :
        tab ==='Completed' ?
        todos.filter(val => val.complete) :
        todos.filter(val => !val.complete)


  return (
    <>
    {
      filteredList.map((todo, todoIndex)=>{
        return(
          <TodoCard 
            key={todoIndex} 
            //todoIndex={todoIndex}
            todoIndex={todos.findIndex(val => val.input == todo.input)}
            {...props}
            task={todo}/>
        
        )
      })
    }

    </>
  )
}
