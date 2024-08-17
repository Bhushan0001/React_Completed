import React from "react"
import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
function App() {
  // let foodItems = []
  let foodItems = ["Dal","Green Vegetable", "Roti","Salad", "Milk "]
 
  return (
    <React.Fragment>
      <div>Healthy Food</div>
      <FoodItems Items={foodItems}  />
      <ErrorMessage Items={foodItems} />
    </React.Fragment>
  )
}

export default App
