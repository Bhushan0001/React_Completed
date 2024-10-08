import React from 'react'
import TodoItem from './TodoItem'
import styles from "./TodoItems.module.css"

function TodoItems({todos}) {
  return (
    <div>
        <div className={styles.itemsContainer}>
            {todos.map((item)=>{ return <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate}/>})}
     </div>
    </div>
  )
}

export default TodoItems