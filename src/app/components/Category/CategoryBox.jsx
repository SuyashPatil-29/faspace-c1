'use client';
import React, {useState} from "react";

const CategoryBox = ({
  icon: IconType, // Use 'IconType' instead of 'Icon'
  label,
  item
}) => {

  return (
    <div
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        group
        transition
        cursor-pointer
        lg:whitespace-nowrap
        text-center
        hover:border-neutral-800
      `}
    >
      {IconType && <IconType className="md:w-5 md:h-5 h-4 w-4 text-neutral-500 group-hover:text-neutral-800 group-hover:scale-110" />}
      <div className={`font-medium text-sm group-hover:text-neutral-800 group-hover:border-b-[3px] pb-2 border-gray-300 whitespace-nowrap`} >
        {label}
      </div>
    </div>
  );
}

export default CategoryBox;