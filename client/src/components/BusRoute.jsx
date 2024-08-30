import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Map from '../assets/Map.png';

const BusRoute = () => {
  const [route, setRoute] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log(route)
  };

  return (
    <div className="bg-white rounded-xl shadow-lg shrink flex-1">
      <div className='py-4 sm:py-6 px-4 sm:px-8 md:px-12'>
        <form onSubmit={handleSubmit}> 
        <div className='flex items-center gap-2 sm:gap-4 shadow border rounded-xl py-2 sm:py-3 px-3 sm:px-5 text-gray-700'>
          <FaSearch className="text-regal-blue text-lg sm:text-xl" />
          <input 
            className="appearance-none focus:outline-none focus:shadow-outline text-sm sm:text-base w-full" 
            placeholder="Find Bus Route."
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          />
        </div>
        </form>
      </div>
      <div>
        <img src={Map} alt="Map" className="w-full h-auto rounded-b-xl" />
      </div>
    </div>
  );
}

export default BusRoute;
