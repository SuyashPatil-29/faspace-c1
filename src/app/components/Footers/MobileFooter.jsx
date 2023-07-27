"use client"
import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';

const MobileFooter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsVisible(!isScrollingDown);
      setScrollDirection(isScrollingDown ? 'down' : 'up');
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const footerStyles = {
    transform: `translateY(${isVisible ? '0' : '100%'})`,
    transition: 'transform 300ms ease-in-out',
  };

  return (
    <div
      className='flex md:hidden w-full fixed bottom-0 justify-center gap-6 p-3 border-t-2 bg-white text-gray-600'
      style={footerStyles}
    >
      <div className='flex flex-col items-center'>
        <BsSearch className='text-2xl' />
        <p>Explore</p>
      </div>
      <div className='flex flex-col items-center'>
        <AiOutlineHeart className='text-2xl' />
        Wishlist
      </div>
      <div className='flex flex-col items-center'>
        <BiUserCircle className='text-2xl' />
        Login
      </div>
    </div>
  );
};

export default MobileFooter;
