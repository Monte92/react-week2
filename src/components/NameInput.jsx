import { useState } from 'react'

export default function NameInput({ onNameChange }) {

    const [name, setName] = useState("");

    function handleChange(e) {
        const newName = e.target.value;
        setName(newName);
        onNameChange(newName);
    }

    return(
        <input type="text"
         placeholder="Enter name here"
         value={name}
         onChange={handleChange}
         />
    )
}