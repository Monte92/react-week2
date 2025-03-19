import { useState } from 'react'
import Greetings from './components/Greetings'
import NameInput from './components/NameInput'
import Weekdays from './components/Weekdays';


function App() {

  const [name, setName] = useState("");


  return(
    <div>
      <Greetings name={name}/>
      <NameInput onNameChange={setName}/>
      <Weekdays />
    </div>
  )
}

export default App
