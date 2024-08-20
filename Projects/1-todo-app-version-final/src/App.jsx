import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"
import {useState} from 'react'

function App() {
  const todo = [{
    name : "Buy Milk",
    dueDate: "4/10/2023"
  }, 
{ 
  name: "Goto College", 
  dueDate: "4/9/2024"
}]

let [todoItems ,settodoItems] = useState(todo);
const onNewItems = (todoName,todoDate)=>{
    let newTodoList = [...todoItems,{name:todoName, dueDate: todoDate}]
    settodoItems(newTodoList)
}

let handleByDelete = (todoName)=>{
    let newTodo = todoItems.filter(item=>{return item.name !== todoName})
    console.log(newTodo)
    settodoItems(newTodo)
}
  return <>
    <center className="todo-container">
      <AppName/>
      <AddTodo onNewItems={onNewItems}/>
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todos={todoItems} handleByDelete={handleByDelete}/>
      </center>
  </>

}

export default App
