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
      {IconType && <IconType className="w-6 h-6 text-neutral-500 group-hover:text-neutral-800 group-hover:scale-110" />}
      <div className="font-medium text-sm group-hover:text-neutral-800 group-hover:border-b-[3px] pb-2 border-gray-300">
        {label}
      </div>
    </div>
  );
}

export default CategoryBox;