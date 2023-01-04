import Image from 'next/image'
import React from 'react'

const Weather = ({data}) => {
  return (
    <div className='relative flex-col justify-between max-w-[500px] w-full m-auto p-4 text-gray-600 z-10 h-[90vh]'>
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='/' width='100' height='100'/>
                <p className='text-2xl'>{data.weather[0].main}</p>
            </div>
            <p className='text-9x'>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        <div className='bg-black/50 text-white text-3xl relative p-8 rounded-lg text-center'>
            <p>Weather in {data.name}</p>
            <div>
                
                <p>Feels Like: {data.main.feels_like.toFixed(0)}&#176;</p>
            </div>
            <div>
                <p>Humidity: {data.main.humidity.toFixed(0)}%</p>
            </div>
            <div>
                <p>Winds: {data.wind.speed.toFixed(0)} MPH</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Weather