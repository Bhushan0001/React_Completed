import {useState} from 'react';
import Items from "./Items";
const FoodItems = (props)=>{
    // let foodItems = ["Dal","Green Vegetable", "Roti","Salad", "Milk "]
    let foodItems = props.Items;
    let [ActiveButton , setActiveButton] = useState([]);
    let handleByButton = (item)=>{
      let bought = ActiveButton.includes(item)
      if(!bought){
        setActiveButton([...ActiveButton,item])
        
      }
      // console.log(event)
      // console.log(`${item} beeing bought`)
    }
    return (
        <ul className="list-group">
        {foodItems.map((item)=>( <Items key = {item} items={item} bought={ActiveButton.includes(item)} handleByButton={handleByButton}/>))}      
      </ul>
    )
};
export default FoodItems;