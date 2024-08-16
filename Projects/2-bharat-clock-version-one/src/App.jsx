import BharatClockHeading from './components/BharatClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'

function App() {
  return <div className='container'>
   <center>
   <BharatClockHeading />
    <ClockSlogan />
    <CurrentTime className="fw-bolder"/>
   </center>
  </div>
}

export default App
