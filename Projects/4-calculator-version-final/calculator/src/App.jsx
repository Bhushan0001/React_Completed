import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import {useState} from 'react'
function App() {
  const keys = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  let [changeInput, setchangeInput] = useState("");
  const handleByButton = (event,button)=>{
      console.log(button)
      setchangeInput(button)
      if(button ==='C'){
        setchangeInput("")
      }
      else if(button==='='){
        setchangeInput(eval(changeInput))
      }
      else{
        setchangeInput(changeInput+button)
      }
  }
  return (
    <>
      <center>
      <div className={styles.calculator}>
        <Display changeInput={changeInput}/>
        <ButtonContainer handleByButton={handleByButton} buttons={keys} />
      </div>
      </center>
    </>
  )
}

export default App
