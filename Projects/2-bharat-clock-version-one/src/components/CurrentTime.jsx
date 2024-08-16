import React from 'react'

function CurrentTime() {
 let date = new Date(); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)" // "Invalid Date"
  return (
    <div className="fw-bolder"><span><p>This is the current time : {date.toLocaleDateString()+" "}{"  "+ date.toLocaleTimeString()} </p></span></div>
  )
}

export default CurrentTime 