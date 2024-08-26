import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-store'

function WelcomeMessage() {
  let contextObj = useContext(TodoItemsContext)
  const todoItems = contextObj.todoItems;
  return (
    <div>{todoItems.length===0 && <p>Enjoy your day</p>}</div>
  )
}

export default WelcomeMessage