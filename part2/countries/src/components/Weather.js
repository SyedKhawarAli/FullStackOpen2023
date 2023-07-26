import axios from 'axios'
import { useState, useEffect } from 'react'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_WEATHER_API_KEY

    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
            .then(response => {
                console.log('promise fulfilled')
                setWeather(response.data)
            })
            .catch(error => {
                console.log(error)
                setWeather([])
            })
    }, [capital, api_key])

    return (
        
        <div>
            {
                weather.length === 0 ?
                    <div>   
                        <strong>weather data not available</strong>
                    </div>
                :
                <div>
                    <div>
                        <strong>temperature:</strong> { Math.floor(weather.main.temp - 273.15) } Celsius
                    </div>
                        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
                    <div>
                        <strong>wind:</strong> {weather.wind.speed} m/s
                    </div>
                </div>
            }
        </div>
    )
}

export default Weather