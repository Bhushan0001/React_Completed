import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"

function App() {
  const todo = [{
    name: "Buy Milk",
    dueDate: "4/10/2023"
  },
  {
    name: "GO TO COLLEGE",
    dueDate: "4/10/2023"
  }]
  return <>
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <TodoItems TodoItems={todo} />
      </center>
  </>

}

export default App
