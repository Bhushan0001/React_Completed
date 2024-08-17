import React from 'react'

const Items = ({items}) =>{
    // let {items} = props;
    // console.log(foodItem)
    // console.log
  return (
    <li key={items} className="list-group-item bg-warning-subtle text-primary"><span className='fw-bolder '>{items}</span></li>
  )
}

export default Items