import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {

  // const todos = [
  //   {input: 'Hello! Add your first task!', complete: true},
  //   {input: 'Get groceries', complete: false},
  //   {input: 'Do your laundry', complete: false},
  //   {input: 'Submit assignment before 12', complete: true},
  //   {input: 'Submit project before 12', complete: false},
  // ]

  const [todos, setTodos] = useState([
    {input: 'Hello! Add your first task!', complete: true}
  ])

  const [selectedTab, setSelectedTab] = useState ('Open')

  function handleTodoAdd(newTodo) { 
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleTodoComplete(index){
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo

    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }


  function handleTodoDelete(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index

    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos){
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }



    useEffect(()=>{
      if (!localStorage) { return }
      let db = []
      if (localStorage.getItem('todo-app')) {
        db = JSON.parse(localStorage.getItem('todo-app'))
        setTodos(db.todos)
      }
    },[])

  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoList todos={todos} selectedTab={selectedTab} handleTodoDelete={handleTodoDelete} handleTodoComplete={handleTodoComplete}/>
      <TodoInput handleTodoAdd={handleTodoAdd}/>
    </>
  )
}

export default App
