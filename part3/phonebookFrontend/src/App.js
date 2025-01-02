import { useState, useEffect } from 'react'
import personsService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [isDestructive, setIsDestructive] = useState(false)

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (personObject.name.length === 0) {
      return
    }
    if (personExists(newName)) {
      const person = persons.find(p => p.name === personObject.name)
        if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) {
          updateNumber(person.id, personObject.number)
        } else {
          createPerson(personObject)
        }
    } else {
      createPerson(personObject)
    }
  }

  const personExists = (name) => {
    return persons.some(person => person.name === name)
  }

  const createPerson = (personObject) => {
    personsService
      .create(personObject)
      .then(returnedPerson => {
        const person = returnedPerson
        setPersons(persons.concat(person))
        setIsDestructive(false)
        setNotificationMessage(`Added ${person.name}`)
      })
    clearForm()
  }

  const handleDeletePerson = (person) => {
    if (window.confirm("Delete this person?")) {
      personsService
        .deletePerson(person.id)
        .then(() => {
          setIsDestructive(true)
          setNotificationMessage(`Deleted ${person.name} `)
          handlePersonsUpdate()
        })
        .catch(error => {
          alert(`the person '${person.name}' was already deleted from server`)
          handlePersonsUpdate()
        })
    }
  }

  const clearForm = () => {
    setNewName('')
    setNewSearch('')
    setNewNumber('')
    moveCursorToNameField()
  }

  const updateNumber = (id, newNumber) => {
    if (window.confirm("Update this person's number?")) {
      personsService
        .getOne(id)
        .then(person => {
          const changedPerson = { ...person, number: newNumber }
          personsService
            .update(changedPerson)
            .then(() => {
              setIsDestructive(false)
              setNotificationMessage(`Updated ${changedPerson.name} with new number ${changedPerson.number}`)
              handlePersonsUpdate()
            })
            .catch(error => {
              alert(`the person '${id}' was already deleted from server`)
              handlePersonsUpdate()
            })
        })
        .catch(error => {
          setIsDestructive(true)
          setNotificationMessage(`Information of ${id} has already been removed from server`)
          handlePersonsUpdate()
        })
      clearForm()
    }
  }

  const moveCursorToNameField = () => {
    document.getElementById("nameInput").focus()
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handlePersonsUpdate = () => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  const Persons = ({ personsToShow }) => {
    return (
      <>
        {personsToShow.map(person =>
          <Person
            key={person.id} person={person}
            handleDeletePerson={() => handleDeletePerson(person)}
          />
        )}
      </>
    )
  }

  return (
    <div>
      <Notification message={notificationMessage} isDestructive={isDestructive}  />
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App