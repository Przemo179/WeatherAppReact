import React from 'react';

// type WeatherProps = {
//     data: {
//         name: string,
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
//         wind_speed: number,
//     }

interface Props {
    data: {
        // name: string,
        //     main: {
        //         feels_like : number,
        //         grnd_level : number,
        //         humidity : number,
        //         pressure : number,
        //         sea_level : number,
        //         temp : number,
        //         temp_max : number,
        //         temp_min : number
        //     },
        //     temp: number,
        //     weather: {
        //         description : string,
        //         icon: string,
        //         id: number,
        //         main: string
        //     },
        //     description: string,
        //     feels_like: number,
        //     humidity : number,
        //     wind: {
        //         deg: number,
        //         gust: number,
        //         speed: number
        //     }
        // wind_speed: number,
    },
    location: string,
    setLocation: (string) => void ,
    searchLocation: (string) => void
}

export const MainWeaterProperties = ({data, location, setLocation, searchLocation}: Props) => {
    
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
                    {data.main ? <h1>{data.main.temp.toFixed()}ºC</h1> : null}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].description}</p> : null}
                </div>
            </div>
        
                {data.name != undefined &&
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
)}