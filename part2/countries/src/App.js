import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        setFilteredCountries(response.data)
      })
  }, [])

  useEffect(() => {
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))
    setFilteredCountries(filtered)
  }, [newSearch, countries])

  const handleShowCountry = (country) => {
    setFilteredCountries([country])
    setNewSearch(country.name.common)
  }

  return (
    <div>
      <form>
        <div>
          find countries:
          <input
            value={newSearch}
            onChange={(event) => setNewSearch(event.target.value)}
          />
        </div>
      </form>
      <div>
        {
          filteredCountries.length > 10 ?
            <div>
              Too many matches, specify another filter
            </div>
            :
            filteredCountries.length === 0 ?
              <div>
                No matches, specify another filter
              </div>
              :
              filteredCountries.length === 1 ?
                filteredCountries.map((country) => (
                  <Country key={uuidv4()} country={country} />
                ))
                :
                filteredCountries.map((country) => (
                  <div key={uuidv4()}>
                    {country.name.common}
                    <button onClick={() => handleShowCountry(country)}>show</button>
                  </div>
                ))
        }
      </div>
    </div>
  );
}

const Country = ({ country }) => {
  return (
    <div>
      <div key={uuidv4()}>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital[0]}</div>
        <div>population {country.population}</div>
        <h2>languages</h2>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={uuidv4()}>
              {language}
            </li>
          ))}
        </ul>
        <img src={country.flags.png} alt="flag" width="200" height="100" />
      </div>
    </div>
  )
}



export default App;
