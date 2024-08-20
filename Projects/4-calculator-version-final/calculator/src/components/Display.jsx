import styles from "./Display.module.css"
function Display({changeInput}){
    return <>
        <input type="text" value={changeInput} className={styles.display} readOnly />
    </>
}
export default Display