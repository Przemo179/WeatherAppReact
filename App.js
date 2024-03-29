import React, {useState} from 'react'
import axios from 'axios' // http client library - sending asynch http request to rest endpoints (API)

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=702ff3e1f94d8569e076bb32532490b4`; /*must use `` expect "" or ''*/

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {   // fetch - 
        setData(response.data)
        console.log(response.data)
      })
      setLocation('') // returning input value into ''
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder='Enter location'
            onKeyPress={searchLocation}
            type="text"
          />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.name ? <p>{data.name}</p> : <p>enter city name!</p>}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}ºC</h1> : null}  {/*checking is data.main is available = yes - display data.main.temp - no - display null*/}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name != undefined &&    // displaying only if we get some data
          <div  className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}ºC</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed} kph</p> : null }
              <p>Wind speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
