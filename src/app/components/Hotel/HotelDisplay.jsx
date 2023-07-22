"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import urlFor from '../../../../sanity/lib/urlFor';
import { AiFillStar, AiFillHeart, AiOutlineRightCircle } from 'react-icons/ai';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const HotelDisplay = ({ hotel }) => {
  const [index, setIndex] = useState(0);

  const handleIncIndex = () => {
    setIndex((index) => (index === hotel.images.length - 1 ? 0 : index + 1));
  };

  const handleDecIndex = () => {
    setIndex((index) => (index === 0 ? hotel.images.length - 1 : index - 1));
  }

  return (
    <div>
      <div className='relative group'>
        <Image
          src={urlFor(hotel.images[index]).url()}
          className='w-[400px] h-[350px] rounded-lg transition-all duration-400'
          width={400}
          height={350}
          alt='Listing'
        />
        <AiFillHeart className='absolute top-3 right-3 h-6 w-6 cursor-pointer text-white' />
        
        <div className='absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/80 to-transparent' />
        <div
          className='rounded-full p-3 bg-white group-hover:flex hidden items-center justify-center absolute bottom-[45%] right-2'
          onClick={handleIncIndex}
        >
          <FaChevronRight className='h-4 w-4 cursor-pointer text-slate-700' />
        </div>

        <div
          className={`rounded-full p-3 bg-white ${index === 0 ? 'hidden' : 'group-hover:flex hidden'} items-center justify-center absolute bottom-[45%] left-2`}
          onClick={handleDecIndex}
        >
          <FaChevronLeft className='h-4 w-4 cursor-pointer text-slate-700' />
        </div>
      </div>

      <div className='flex justify-between items-center py-1 pt-3'>
        <p className='font-bold text-lg text-black'>{hotel.name}</p>
        <p className='flex items-center gap-2'>
          <AiFillStar className='text-black' /> {hotel.stars}
        </p>
      </div>

      <p className='text-gray-500'>{hotel.address}</p>

      <p className='text-gray-500'>{hotel.date}</p>

      <div className='flex justify-between items-center'>
        <p>
          <span className='font-bold'>₹ {hotel.price}</span> night
        </p>
      </div>
    </div>
  );
};

export default HotelDisplay;
