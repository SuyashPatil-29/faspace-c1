'use client';

import { usePathname } from 'next/navigation';
import { 
  GiBoatFishing, 
  GiCastle, 
  GiCaveEntrance, 
  GiThink,
  GiIsland,
  GiInspiration,
  GiMountainRoad,
  GiTechnoHeart,
  GiMeditation
} from 'react-icons/gi';

import {AiOutlineLeftCircle, AiOutlineRightCircle} from "react-icons/ai"
import {MdWorkHistory} from 'react-icons/md';
import { FaPeopleCarry } from 'react-icons/fa';
import { FaCubesStacked } from 'react-icons/fa6';
import { BiSolidTimer } from 'react-icons/bi';
import {HiUserGroup} from 'react-icons/hi';

import {LuSettings2 , LuPartyPopper} from "react-icons/lu"

import CategoryBox from './CategoryBox';
import { useRef } from 'react';

export const categories = [
  {
    label: 'All',
    icon: HiUserGroup,
    description: 'All of our spaces designed to accommodate the needs of any individual or small team.',
  },
  {
    label: 'Fast Workstations:',
    icon: MdWorkHistory,
    description: 'These are standard workspaces equipped with essential amenities such as desks, chairs, power outlets, and reliable Wi-Fi. They are ideal for professionals seeking a quick and efficient place to work on tasks or projects.',
  },
  {
    label: 'Collaborative Zones',
    icon: FaPeopleCarry,
    description: 'These areas are designed to foster teamwork and group discussions. They might have larger tables, whiteboards, and comfortable seating arrangements to encourage collaboration among individuals or small teams.',
  },
  {
    label: 'Inspiration Nooks',
    icon: GiInspiration,
    description: 'Create cozy corners or dedicated spaces with inspiring decor, motivational quotes, and ample natural light to fuel creativity and innovation for those looking for a more inspirational setting.'
  },
  {
    label: 'Quiet Retreats',
    icon: GiMountainRoad,
    description: 'These workspaces prioritize peace and quiet, making them suitable for students or individuals who need a focused environment for studying or concentrated work.'
  },
  {
    label: 'Tech Oasis',
    icon: GiTechnoHeart,
    description: 'Outfit some spaces with advanced technology and equipment, such as high-performance computers, design software, or virtual reality setups, catering to digital nomads and tech enthusiasts!'
  },
  {
    label: 'Café-Style Lounges',
    icon: GiIsland,
    description: 'Set up relaxed lounge areas that mimic the ambiance of a café, providing professionals with a more laid-back setting to work while enjoying a cup of coffee or a snack from the fast-food restaurant.'
  },
  {
    label: 'Outdoor Workspaces',
    icon: GiBoatFishing,
    description: 'If the locations allow, consider offering outdoor workspaces on patios or designated areas with tables and shaded seating for those who prefer a breath of fresh air while they work.'
  },
  {
    label: 'Wellness Zones',
    icon: GiMeditation,
    description: 'Integrate elements of relaxation and well-being, such as yoga mats, meditation corners, or even standing desks, to support a healthy work environment.'
  },
  {
    label: 'Networking Hubs',
    icon: GiCastle,
    description: 'Designate specific spaces for networking and socializing, where professionals can connect, exchange ideas, and expand their professional circles.'
  },
  {
    label: 'Extended Hours:',
    icon: GiCaveEntrance,
    description: 'Offer specific locations or areas that are available for work during extended hours, catering to night owls or those with non-traditional work schedules.'
  },
  {
    label: 'Productivity Pods',
    icon: BiSolidTimer,
    description: 'Introduce individual work pods with soundproofing and personal amenities like charging stations, adjustable lighting, and ergonomic seating. These private spaces provide a focused and productive environment for those who require minimal distractions.'
  },
  {
    label: 'Flexible Studios',
    icon: FaCubesStacked,
    description: 'Create versatile studio spaces that can be adapted for various purposes, such as workshops, art sessions, or photography shoots. These dynamic spaces offer a blank canvas for professionals and artists to unleash their creativity.'
  },
  {
    label: 'Innovation Labs',
    icon: GiThink,
    description: 'Set up innovation-focused labs equipped with cutting-edge technologies like 3D printers, augmented reality tools, or prototyping machines. These labs cater to entrepreneurs, startups, and creators looking to bring their innovative ideas to life.'
  },
  {
    label: 'Event Spaces',
    icon: LuPartyPopper,
    description: 'Utilize the restaurant spaces to host networking events, workshops, or seminars. These versatile event spaces can be adapted to accommodate different group sizes and purposes, offering a vibrant atmosphere for knowledge-sharing and collaboration.'
  },
]

const Categories = () => {
    const pathname = usePathname();
    const isMainPage = pathname === '/';
    const containerRef = useRef(null); // Create a ref for the container
  
    const handleScrollRight = () => {
      if (containerRef.current) {
        const currentScrollLeft = containerRef.current.scrollLeft;
        const scrollAmount = currentScrollLeft + 355;
        scrollSmoothTo(containerRef.current, scrollAmount, 400);
      }
    };
  
    const handleScrollLeft = () => {
      if (containerRef.current) {
        const currentScrollLeft = containerRef.current.scrollLeft;
        const scrollAmount = currentScrollLeft - 355;
        scrollSmoothTo(containerRef.current, scrollAmount, 400);
      }
    };
  
    const scrollSmoothTo = (element, scrollAmount, duration) => {
      const start = element.scrollLeft;
      const change = scrollAmount - start;
      const startDate = new Date().getTime();
  
      const animateScroll = () => {
        const currentDate = new Date().getTime();
        const elapsed = currentDate - startDate;
        element.scrollLeft = easeInOutCubic(elapsed, start, change, duration);
  
        if (elapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };
  
      animateScroll();
    };
  
    const easeInOutCubic = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };
  
    return (
      <div className='flex fixed md:top-[85px] top-[100px] md:mt-0 mt-2 left-0 w-full bg-white pt-7 justify-evenly items-center min-h-[120px] z-10'>
        <div>
          <div className='flex items-center justify-between gap-2'>
            <AiOutlineLeftCircle
              className='h-8 w-8 md:block hidden'
              onClick={handleScrollLeft} // Call the scroll function on click
            />
  
            {/* Add the ref to the container */}
            <div
              ref={containerRef}
              className="
                flex 
                flex-row 
                justify-between
                md:w-[73vw]
                w-[100vw]
                overflow-y-scroll
                container
              "
            >
              {categories.map((item) => (
                <CategoryBox
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  className="flex-shrink-0" 
                />
              ))}
            </div>
  
            <AiOutlineRightCircle
              className='h-8 w-8 md:block hidden'
              onClick={handleScrollRight} // Call the scroll function on click
            />
          </div>
        </div>
  
        <div className='md:flex hidden gap-2 items-center justify-between -ml-11 px-6 py-4 rounded-2xl border-2 text-sm font-semibold'>
          <LuSettings2 className='h-6 w-6' />
          <h1>Filters</h1>
        </div>
      </div>
    );
  }
  
  export default Categories;