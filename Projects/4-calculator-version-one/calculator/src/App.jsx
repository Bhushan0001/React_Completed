import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
function App() {
  const keys = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonContainer buttons={keys} />
      </div>
    </>
  )
}

export default App
