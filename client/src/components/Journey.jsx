import React from 'react';
import { FaBusAlt } from "react-icons/fa";
import BusRoute from './BusRoute';
import BusSearch from './BusSearch';

const Journey = () => {
  return (
    <div className='flex flex-col p-4 sm:p-6 md:p-8'>
      <div className='flex flex-col sm:flex-row items-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-8'>
        <FaBusAlt className="text-regal-blue text-4xl sm:text-5xl md:text-6xl" />
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-regal-blue text-center sm:text-left'>
          Plan Your Journey
        </h1>
      </div>

      <div className='flex flex-col mid:flex-row mid:gap-8 p-4 sm:p-6 mid:p-8 gap-8'>
        <BusSearch />
        <BusRoute />
      </div>
    </div>
  );
}

export default Journey;
