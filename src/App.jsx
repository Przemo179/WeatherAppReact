import React, {useState} from 'react';
import axios from 'axios';
import { MainWeaterProperties }  from './components/WeatherPropDisplay';

// interface DataProp {
//     name: string,
//         main: {
//             feels_like : number,
//             grnd_level : number,
//             humidity : number,
//             pressure : number,
//             sea_level : number,
//             temp : number,
//             temp_max : number,
//             temp_min : number
//         },
//         temp: number,
//         weather: {
//             description : string,
//             icon: string,
//             id: number,
//             main: string
//         },
//         description: string,
//         feels_like: number,
//         humidity : number,
//         wind: {
//             deg: number,
//             gust: number,
//             speed: number
//         }
//     wind_speed: number,
// }

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=702ff3e1f94d8569e076bb32532490b4`; /*must use `` expect "" or ''*/

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {  
        setData(response.data)
      })
      setLocation('')
    }
  }

  console.log(data);

  return (
    <MainWeaterProperties
      data = { data }
      //  main, temp, weather, description, feels_like, humidity, wind, wind_speed
      location = { location }
      searchLocation = { searchLocation }
      setLocation = { setLocation }
    />
  );
}

export default App;
