import styles from "./Items.module.css"
const Items = ({items,bought, handleByButton}) =>{
    // let {items} = props;
    // console.log(foodItem)
    // console.log
  return (
    <>
    <li key={items} className={`list-group-item border border-dark text-dark ${bought && 'active'}`}><span className='fw-bolder '>{items} </span><button className={`btn btn-info border-dark ${styles.button}`} 
    onClick={()=>handleByButton(items)}>Buy</button></li>
    </>
  )
}

export default Items 