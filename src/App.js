import React, {useState} from 'react';
import axios from 'axios';
import { MainWeaterProperties } from './components/WeatherPropDisplay';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=702ff3e1f94d8569e076bb32532490b4`; /*must use `` expect "" or ''*/

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {  
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <MainWeaterProperties
      data = { data }
      location = { location }
      searchLocation = { searchLocation }
      setLocation = { setLocation }
    />
  );
}

export default App;
