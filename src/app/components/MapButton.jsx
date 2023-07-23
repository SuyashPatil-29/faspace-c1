import React from 'react'
import {BsMapFill} from 'react-icons/bs'

const MapButton = () => {
  return (
    <div className='flex gap-3 bg-[rgb(34,34,34)] rounded-full py-4 px-5 fixed bottom-24 items-center mx-auto text-white left-[50%] translate-x-[-50%] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
        <h1 className='font-semibold'>Show Map</h1>
        <BsMapFill />
    </div>
  )
}

export default MapButton