import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {LuSettings2} from 'react-icons/lu'

const MobileHeader = () => {
  return (
    <div className='block md:hidden bg-white fixed top-0 left-0 w-full z-10 px-4'>
    <div className='flex bg-white justify-between py-2 my-3 px-7 border-2 rounded-full items-center'>
        <AiOutlineSearch className=' h-6 w-6 text-black mr-4 -ml-2'/>

        <div className='flex flex-col justify-start -ml-24'>
            <h1>Anywhere</h1>
            <h1 className='text-xs text-gray-400'>Any week . Add Guests</h1>
        </div>

        <LuSettings2 className=' h-6 w-6 text-black'/>
    </div>
    </div>
  )
}

export default MobileHeader