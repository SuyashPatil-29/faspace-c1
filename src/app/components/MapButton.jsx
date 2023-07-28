"use client"
import React, { useState, useEffect } from 'react';
import { BsMapFill } from 'react-icons/bs';

const MapButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set a threshold value for scrolling (150px in this case)
      const scrollThreshold = 175;
      // Determine if the user has scrolled more than the threshold
      const shouldShowButton = window.scrollY > scrollThreshold;

      // Show/hide the button based on the scroll position and screen size
      setShowButton(shouldShowButton);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    {showButton ? (
      <div
        className='flex gap-3 md:hidden bg-[rgb(34,34,34)] rounded-full py-4 px-5 fixed bottom-4 items-center mx-auto text-white left-[50%] translate-x-[-50%] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
        style={{ transition: 'transform 300ms ease-in-out' }}
      >
        <h1 className='font-semibold'>Map</h1>
        <BsMapFill />
      </div>
    ) : null}

    <div>
      <div
        className='md:flex hidden gap-3 bg-[rgb(34,34,34)] rounded-full py-4 px-5 fixed bottom-24 items-center mx-auto text-white left-[50%] translate-x-[-50%] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
      >
        <h1 className='font-semibold'>Show Map</h1>
        <BsMapFill />
      </div>
    </div>
    </div>
  );
};

export default MapButton;

