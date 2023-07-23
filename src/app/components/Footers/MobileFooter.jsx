import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'

const MobileFooter = () => {
  return (
    <div className='flex md:hidden w-full fixed bottom-0 justify-center gap-6 p-3 border-t-2 bg-white text-gray-600'>
        <div className='flex flex-col items-center'>
            <BsSearch className='text-2xl'/>
            <p>Explore</p>
        </div>
        <div className='flex flex-col items-center'>
            <AiOutlineHeart className='text-2xl'/>
            Wishlist
        </div>
        <div className='flex flex-col items-center'>
            <BiUserCircle className='text-2xl'/>
            Login
        </div>
    </div>
  )
}

export default MobileFooter