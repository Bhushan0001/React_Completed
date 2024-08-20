import React from "react"
// import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import {useState} from "react"
function App() {
  // let foodItems = []
  // let foodItems = [,"Salad", "Milk "]

  let [foodItems , setFoodItems] = useState(["Dal","Green Vegetable", "Roti"])

  // let textStateArr = useState("Food item is enter by user");
  // let textStateVal = textStateArr[0];
  // let settextState = textStateArr[1];
  /* ------------ above commented section is alternative way for declaration ------------- */
  let [textToShow, setTextState] = useState("Food item is enter by user")

  const onkey = (event)=>{
    if(event.key === "Enter"){
      setFoodItems([...foodItems, event.target.value])
      // setTextState(event.target.value)
    }
    
  }
 
  return (
    <>
    <Container>
      <div>Healthy Food</div>
      <FoodInput onkey={onkey}/>
      <FoodItems Items={foodItems}  />
      <ErrorMessage Items={foodItems} />
    </Container>
    {/* <Container>
      <p>Hello sir ! Good Morning My name is Bhushan I am from Manmad Nashik I recently graduated in BE computer Engineering from SITRC Nashik college let's talking about my technical skills I have a proficiency in java and I bring it strong foundation from web development technologies like HTML , CSS , Javascript , Typescript, React , NOde ,Express, SpringBoot Framework  and I used Tools eg. Git , Jira , vscode, Postman</p>
    </Container> */}
    </>
  )
}

export default App
