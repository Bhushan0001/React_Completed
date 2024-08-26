import { useState } from "react"

const Scorecard = ({Player, changePlayer}) =>{
    const [count, setcount] = useState(0)
    return (
        <>
        <div><h1>{Player}</h1></div>
        <div>
            <button type="button" className="btn btn-primary" onClick={()=>setcount(count+1)}>add</button>
            <div>
                <p>{count}</p>
            </div>
            <button type="button" className="btn btn-primary" onClick={()=>setcount(count-1)}>delete</button>
            
        </div>
         <div className="container mt-3">
            <button className="btn btn-primary" onClick={changePlayer}>changePlayer</button>
         </div>
    
        
        </>
    )
}
export default Scorecard