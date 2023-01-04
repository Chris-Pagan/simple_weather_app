import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import {createApi} from "unsplash-js"
import Image from "next/image";
import Weather from "../components/Weather";
import Spinner from '../components/Spinner'

//TODO: Figure out how to get the background image to match the weather (clear skys, rain, snow, etc.)

export default function Home() {
  const [city, setCity] = useState("");
  const [state,setState] = useState("")
  const [country, setCountry] =useState("")
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
 // const [weatherPic, setWeatherPic] = useState({})
 

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
 // const unsplash = createApi({ accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY  })
 const weatherImg = 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(weatherUrl).then((response) => {
      setWeather(response.data)
      //setWeatherPic(unsplash.photos.getRandom({query: response.data.weather[0].description, count: 1}))
      
      // console.log(response.data.weather[0].description)

    })
    setCity('')
    setLoading(false)
  }

  if (loading) {
    return <Spinner />
  } else{

    return (
      <>
      <div>
        <Head>
          <title>Weather App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
    
        </div>
  {/* Overlay */}
  <div className="top-0 left-0 bottom-0 bg-black/40 z-[1]">
    {/* Background Image */}
  
        <Image src={weatherImg} fill alt="/" className="object-cover" />
  
  {/* Search */}
  <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
    <form 
    onSubmit={fetchWeather}
    className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
      <div>
        <input 
        onChange={(e) => setCity(e.target.value)}
        type='text' placeholder="Search City" 
          className="w-full bg-transparent border-none text-white focus:outline-none text-2kx placeholder:text-white"
        />
      </div>
      <button onClick={fetchWeather}><BsSearch size={20}/></button>
    </form>
  </div>
  {/* Weather */}
  {weather.main && <Weather data={weather}/>}
  </div>
  </>
    );
  }
}
