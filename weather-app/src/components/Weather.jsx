import './Weather.css';
import { useEffect, useState, useRef} from 'react';
import axios from 'axios';
import search_icon from '../assets/search.png';
import  cloudy_icon from '../assets/cloudy.png';
import  rain_icon from '../assets/rain.png';
import storm_icon from '../assets/storm.png';
import sun_icon from '../assets/sun.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.jpg';



export function Weather () {
    const inputRef = useRef();
    const [getWeatherData, setGetWeatherData] = useState(false);

    const allIcons = {
        "01d": cloudy_icon,
        "01n": storm_icon,
        "02d": sun_icon,
        "02n": rain_icon,
        "03d": wind_icon,
        "03n": rain_icon,
        "04d": cloudy_icon,
        "04n": storm_icon,
        "05d": sun_icon,
        "05n": wind_icon,
        "06d": rain_icon,
        "06n": cloudy_icon,
        "07d": sun_icon
    }

    const [city, setCity] = useState("");
    
    //Search for city
    const search = async (city) => {
        {city === "" && window.alert("Enter city name")};

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`
            const response = await axios.get(url);
            const icon = allIcons[response.data.weather[0].icon || sun_icon];
            setGetWeatherData({
                humidity: response.data.main.humidity,
                windSpeed: response.data.wind.speed,
                temperature: response.data.main.temp,
                location: response.data.name,
                icon: icon
            })


        } catch (error) {
            alert("Location not found. Please try again: ", error);

           
        }
    }
    
        useEffect(() => {
            search("Lusaka")
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [city])


    return(
        <div className="weather">
            <div className="search-bar">
                <input ref={inputRef}
                type="text" 
                placeholder="Search" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />

                <img src={search_icon} width={20} className='search-icon' onClick={() => 
                {const value = inputRef.current.value
                    search(value);
                    setCity("");
                }
                    
                }/>
            </div>
            <br />
                {getWeatherData ? <>
                <img src={cloudy_icon} alt="" className='weather-icon' width={100} />
                <p className='temperature'>{((getWeatherData.temperature - 273.15)).toFixed(1)}°C </p>
                <p className='location'>{getWeatherData.location}</p>
            <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="" width={30} className='humidity'/>
                    <div>
                        <p>{getWeatherData.humidity}%</p>
                        <span>Humidity</span>
                    </div>  
                </div>
              
                <div className="col">
                    <img src={wind_icon} alt="" width={30} />
                    <div>
                        <p>{getWeatherData.windSpeed}km/h</p>
                        <span>Wind speed</span>
                    </div>     
                </div>
            </div>
                </>: <></>}
        </div>
    )
}

export default Weather