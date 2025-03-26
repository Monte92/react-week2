import { useState } from 'react'
import Greetings from './components/Greetings'
import NameInput from './components/NameInput'
import Weekdays from './components/Weekdays';
import MyCheckbox from './components/MyCheckbox';


function App() {

  const [name, setName] = useState("");


  return(
    <div>
      <Greetings name={name}/>
      <NameInput onNameChange={setName}/>
      <Weekdays />
      <MyCheckbox />

    </div>
  )
}

export default App
