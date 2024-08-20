import {useRef} from 'react'
import { IoAddCircleSharp } from "react-icons/io5";
function AddTodo({onNewItems }) {
  let todoNameUpdate = useRef()
  let todoDateUpdate = useRef()

 let handlByItems = (event) =>{
    event.preventDefault();
    let todoName = todoNameUpdate.current.value
    let todoDate = todoDateUpdate.current.value
    todoNameUpdate.current.value = ""
    todoDateUpdate.current.value = ""
    onNewItems(todoName, todoDate)
 }
  return (
    <div className="container">
      <form action="" onSubmit={handlByItems} className="row kg-row">
        <div className="col-6 ">
          <input type="text" ref={todoNameUpdate} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date"  ref={todoDateUpdate}/>
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" ><IoAddCircleSharp />
          </button>
        </div>
        </form>
    </div>

  )
}

export default AddTodo