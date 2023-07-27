'use client';
import React from "react";

const CategoryBox = ({
  icon: IconType, // Use 'IconType' instead of 'Icon'
  label,
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
        text-neutral-500
        hover:border-neutral-800
      `}
    >
      {/* Conditional rendering to check if 'IconType' is provided */}
      {IconType && <IconType className="md:w-4 md:h-4 h-4 w-4 text-neutral-500 group-hover:text-neutral-800 group-hover:scale-110" />}
      <div className="font-medium text-sm group-hover:text-neutral-800 group-hover:border-b-[3px] pb-2 border-gray-300 whitespace-nowrap md:whitespace-normal">
        {label}
      </div>
    </div>
  );
}

export default CategoryBox;