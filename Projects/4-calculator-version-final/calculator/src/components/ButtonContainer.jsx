import styles from "./ButtonContainer.module.css"

function ButtonContainer({buttons, handleByButton}) {
  return (
    <>
    <div  className={styles.buttonsContainer}>
      {buttons.map((button)=>{ return <button key={button} className={styles.button} onClick={(event)=>handleByButton(event, button)}>{button}</button>
      })}
    </div>
    </>

  )
}

export default ButtonContainer