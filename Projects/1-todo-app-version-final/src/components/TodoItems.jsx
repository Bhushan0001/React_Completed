import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import styles from "./TodoItems.module.css"
import { TodoItemsContext } from '../store/todo-items-store'

function TodoItems() {
  let contextObj = useContext(TodoItemsContext)
  const todoItems = contextObj.todoItems;
  
  return (
    <div>
        <div className={styles.itemsContainer}>
            {todoItems.map((item)=>{ return <TodoItem key={item.name} todoName={item["name"]} todoDate={item.dueDate}  />})}
     </div>
    </div>
  )
}

export default TodoItems