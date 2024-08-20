import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"

function App() {
  const todo = [{
    name : "Buy Milk",
    dueDate: "4/10/2023"
  }, 
{ 
  name: "Goto College", 
  dueDate: "4/9/2024"
}]
let [Item,setItem] = useState([{}])
let handleItems = () =>{
  let newItem = []
  
}

  return <>
    <center className="todo-container">
      <AppName/>
      <AddTodo handleItems={handleItems}/>
      <TodoItems todos={todo}/>
      </center>
  </>

}

export default App
