import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {GlobeAltIcon, Bars3Icon, MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import {UserCircleIcon} from "@heroicons/react/24/solid"

const Header = () => {
  return (
    <header className=' md:flex hidden bg-white justify-between px-20 py-3 items-center border-b-[4px] fixed top-0 left-0 w-full z-10'>
      <Link href="/" className=' -mr-11'><Image src="/assets/Airbnb_logo_PNG3.png" width={100} height={100} alt='Logo'/></Link>

      <div className=' ml-60 flex justify-between items-center rounded-full border-2 py-2 px-2 shadow-md hover:shadow-lg min-w-[360px]'>
        <p className=' border-r-2 font-semibold border-gray-300 px-3 pr-3 text-sm'>Anywhere</p>
        <p className=' border-r-2 font-semibold border-gray-300 px-3 pr-3 text-sm'>Any week</p>
        <p className=' text-gray-500 text-sm'>Add guests</p>
        <p><MagnifyingGlassIcon className=' h-8 w-8 bg-[rgb(255,56,92)] p-2 text-white font-semibold rounded-full' /></p>
      </div>

      <div className='flex gap-4 items-center'>
        <h1 className=' text-sm font-semibold whitespace-nowrap'>Airbnb Your home</h1>
        <GlobeAltIcon className='h-6 w-6' />
        <div className='flex gap-2 items-center py-1 px-2 border-2 rounded-full mx-4 shadow-md hover:shadow-lg'>
          <Bars3Icon className='h-6 w-6' />
          <UserCircleIcon className='h-8 w-8 text-gray-600' />
        </div>
      </div>

    </header>
  )
}

export default Header