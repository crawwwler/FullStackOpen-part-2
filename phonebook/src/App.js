import { useState, useEffect } from 'react'
import Person from './components/Person'
import Search from './components/Search'
import Form from './components/Form'
import server from './services/server'
import Notification from './components/Notification'

const App = () => {
  // STATES OF THE COMPONENT
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [noti, setNoti] = useState(null)


  // FETCHING THE DATA FOR FIRST TIME
  useEffect(() => {
    server
      .getAll()
      .then(pp => {
        setPersons(pp.data)
      })
  }, [])


  // HANDLING THE SEARCH
  const handleSearch = event => {
    setSearch(event.target.value)
    setPersons(persons) // KINDA BROKE THE SRP HERE
  }

  const showing = search.length > 0 ?
    persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    : persons




  // HANDLE THE NAME
  const inputHandler = event => {
    setNewName(event.target.value)
  }

  // HANDLE THE NUMBER OF PERSONS
  const numHandler = event => {
    setNewNumber(event.target.value)
  }

  // THE METHOD FOR ADDING PERSONS TO DB
  // THE INITIAL CHECK FOR UPDATING NUMBER OF EXISTING NAMES ALSO HAPPENS HERE 
  const adding = event => {
    event.preventDefault()
    const nuName = {
      name: newName,
      number: newNumber
    }

    if (persons.map(person =>
      person.name.toLowerCase()).includes(nuName.name.toLowerCase())) {
      replaceNumber(nuName) 
    } else {
      server
        .create(nuName)
        .then(pp => {
          setPersons(persons.concat(pp.data))
          setNewName('')
          setNewNumber('')
          setNoti(
            `added ${nuName.name}`
          )
          setTimeout(() => {
            setNoti(null)
          }, 5000)
        })
    }
  }

  // REPLACING THE NUMBER
  const replaceNumber = (cPerson) => {
    const id = persons.find(person => person.name.toLowerCase() === cPerson.name.toLowerCase()).id
    const copy = { ...cPerson }
    copy.id = id
    const wconf = window.confirm(`${cPerson.name} is already added to phonebook. replace
    the old number with a new one?`)
    if (wconf) {
      server
        .replace(id, copy)
        .then(response => {
          setPersons(persons.map(person => person.id !== id ? person : response.data))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          alert(
            `information of ${copy.name} has already been removed from the server`
          )
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  // REMOVING PERSON FROM THE DB
  const removePerson = (id) => {
    const p = persons.find(person => person.id === id)
    const delConf = window.confirm(`delete ${p.name}`)
    if (delConf) {
      server
        .remove(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={noti} />
      <Search value={search} change={handleSearch} />
      <h2>add a new</h2>
      <Form
        func={adding}
        value={{ newName, newNumber }}
        change={{ inputHandler, numHandler }}
      />
      <h2>Numbers</h2>
      <ul>
        {showing.map(person =>
          <Person key={person.id} person={person} func={() => removePerson(person.id)} />)}
      </ul>
    </div>
  )
}

export default App