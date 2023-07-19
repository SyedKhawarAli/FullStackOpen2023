import Person from "./Person"
import personSevice from "../services/persons"

const handleDeletePerson = (id, handlePersonsUpdate) => {
    if (window.confirm("Delete this person?")) {
        personSevice
            .deletePerson(id)
            .then(() => {
                handlePersonsUpdate()
            })
            .catch(error => {
                alert(`the person '${id}' was already deleted from server`)
                handlePersonsUpdate()
            })
    }
}

const Persons = ({ personsToShow, handlePersonsUpdate }) => {
    return (
        <>
            {personsToShow.map(person =>
                <Person
                    key={person.id} person={person}
                    handleDeletePerson={() => handleDeletePerson(person.id, handlePersonsUpdate)}
                />
            )}
        </>
    )
}

export default Persons