
import styles from "./FoodInput.module.css"
const FoodInput = ({onkey})=>{
    
    return <>
    <input className= {styles.input} type="text" placeholder="Enter Food Here " onKeyDown={onkey}/>
    </>
} 
export default FoodInput; 