import React from 'react'
import TodoItems from './TodoItem'
import styles from "./TodoItems.module.css"

function TodoItem({todos}) {
  return (
    <div>
        <div className={styles.itemsContainer}>
            {todos.map((item)=>{ return <TodoItems todoName={item["name"]} todoDate={item.dueDate}/>})}
     </div>
    </div>
  )
}

export default TodoItem