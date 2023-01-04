import React from 'react'
import spinner from "../public/spinner.gif"
import Image from 'next/image'

const Spinner = () => {

  return (
    <div>
        <Image src={spinner} 
        className="m-auto w-[200px]"
        alt="spinning circle while loading data"/>
    </div>
  )
}

export default Spinner