import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Weather from './Weather'

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
                <h1 key={uuidv4()}>Weather in {country.capital[0]}</h1>
                <Weather capital={country.capital[0]} />
            </div>
        </div>
    )
}

export default Country