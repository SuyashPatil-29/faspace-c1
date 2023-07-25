// CarouselArrows.js

import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const NextArrow = ({ onClick }) => (
  <div
    className='rounded-full p-3 bg-white group-hover:flex hidden items-center justify-center absolute bottom-[45%] right-2'
    onClick={onClick}
  >
    <FaChevronRight className='h-4 w-4 cursor-pointer text-slate-700' />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className='rounded-full p-3 bg-white group-hover:flex hidden items-center justify-center absolute bottom-[45%] left-2'
    onClick={onClick}
  >
    <FaChevronLeft className='h-4 w-4 cursor-pointer text-slate-700' />
  </div>
);

export { NextArrow, PrevArrow };