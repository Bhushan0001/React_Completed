import styles from "./ButtonContainer.module.css"

function ButtonContainer({buttons}) {
  return (
    <>
    <div  className={styles.buttonsContainer}>
      {buttons.map((button)=>{ return <button key={button} className={styles.button}>{button}</button>
      })}
    </div>
    </>

  )
}

export default ButtonContainer