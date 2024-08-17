import Items from "./Items";
const FoodItems = (props)=>{
    // let foodItems = ["Dal","Green Vegetable", "Roti","Salad", "Milk "]
    let foodItems = props.Items;
    return (
        <ul className="list-group">
        {foodItems.map((item)=>( <Items key = {item} items={item}/>))}
       
      </ul>
    )
};
export default FoodItems;