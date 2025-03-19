

export default function NameInput({ name, onNameChange }) {

    function handleChange(e) {
        onNameChange(e.target.value);
    }

    return(
        <div> 
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={handleChange}
            />
        </div>
    )
}