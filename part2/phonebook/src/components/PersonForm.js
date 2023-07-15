const PersonForm = ({ addPerson, newName, handlePersonChange, newNumber, handleNumberChange }) => {
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                        id="nameInput"
                        value={newName}
                        onChange={handlePersonChange}
                    />
                </div>
                <div>
                    number: <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm