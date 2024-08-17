import Hello from "./components/Hello";
import Random from "./components/Random";

function App(){
  return  <div>
    <h1>
    Hello world </h1>
    {/* <Hello/> */}
    < Random color="black"/>
    < Random color="blue"/>
    < Random color="orange"/>
    < Random color="grey"/>
    
  </div>
}
export default App; 