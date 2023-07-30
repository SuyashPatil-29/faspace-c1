"use client"
import Image from 'next/image';
import React,{useState} from 'react';
import urlFor from '../../../../sanity/lib/urlFor';
import { AiFillStar } from 'react-icons/ai';
import HeartButton from "./HeartButton";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HotelDisplay.css"
import { NextArrow } from "./CarouselArrow"



const HotelDisplay = ({ hotel }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div>
      <div className='group'>
        <Slider
          {...settings}
          nextArrow={<NextArrow />}
        >
          {hotel.images.map((image, index) => (
            <div key={index}>
              <Image
                src={urlFor(image).url()}
                className='md:w-[350px] md:h-[300px] w-[350px] h-[300px] object-fill rounded-2xl transition-all duration-400 relative'
                width={400}
                height={350}
                alt='Listing'
              />
            </div>
          ))}
        </Slider>
        <div className='absolute top-3 right-3 cursor-pointer'>
          <HeartButton />
        </div>
      </div>

      <div className='flex justify-between items-center py-1 pt-3'>
        <p className='font-bold text-md text-black'>{hotel.name}</p>
        <p className='flex items-center gap-2'>
          <AiFillStar className='text-black text-sm' /> {hotel.stars}
        </p>
      </div>

      <p className='text-gray-500 text-sm'>{hotel.address.slice(0, 40)}...</p>

      <p className='text-gray-500 text-sm'>{hotel.date}</p>

      <div className='flex justify-between items-center'>
        <p>
          <span className='font-bold text-sm'>₹ {hotel.price}</span> night
        </p>
      </div>
    </div>
  );
};

export default HotelDisplay;
