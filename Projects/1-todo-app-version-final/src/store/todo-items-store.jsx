import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
     todoItems: [],
     addNewItem: ()=>{},
     deleteItem: ()=>{}
    });

// Reducer is pure function 

const todoItemsReducer = (currTodoItems, action)=>{
    let newTodoItems = currTodoItems;
    if(action.type === 'NEW_ITEM'){
     newTodoItems = [...currTodoItems,{name: action.payload.todoName, dueDate: action.payload.todoDate}]
    }
    else if(action.type === 'DELETE_ITEM'){
      newTodoItems = currTodoItems.filter((item)=> item.name !==action.payload.todoName)
    }
    return newTodoItems;
  }



// export default TodoItemsContext;
const TodoItemsContextProvider = ({children}) =>{
    // const [todoItems ,settodoItems] = useState(todo);
    const todo = [{
        name : "Buy Milk",
        dueDate: "4/10/2023"
      }, 
    { 
      name: "Goto College", 
      dueDate: "4/9/2024"
    }]
    
const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, todo)
const addNewItem = (todoName,todoDate)=>{
    const newItemAction = {
      type : "NEW_ITEM",
      payload :{
         todoName, 
         todoDate
      }
    };
    dispatchTodoItems(newItemAction); 
}
let deleteItem = (todoName)=>{
    const deleteItemAction = {
      type : "DELETE_ITEM", 
      payload :{
         todoName, 
      }
    };
    dispatchTodoItems(deleteItemAction); 
}
    return  <TodoItemsContext.Provider value={{todoItems, addNewItem, deleteItem}}>{children}</TodoItemsContext.Provider>
}
export default TodoItemsContextProvider;