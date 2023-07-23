import React from 'react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <div className='md:flex hidden w-full fixed bottom-0 justify-between p-3 px-24 border-t-2 bg-white'>
        <ul className='flex gap-2'>
            <h1>© 2023 Airbnb, Inc.</h1>
            <h1>· Privacy · Terms · Sitemap · Company Details · Destinations</h1>
        </ul>
        <ul className='flex gap-4 font-semibold'>
            <h1><GlobeAltIcon className='h-6 w-6' /></h1>
            <h1 className='hover:underline'>English (IN)</h1>
            <h1 className='hover:underline'>₹ INR</h1>
            <h1 className='hover:underline'>Support & resources</h1>
        </ul>
    </div>
  )
}

export default Footer