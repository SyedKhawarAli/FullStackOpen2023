import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import Country from './components/Country'

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

export default App;
