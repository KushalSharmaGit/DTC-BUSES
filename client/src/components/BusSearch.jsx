import React, { useState } from 'react';
import { BsSendFill } from "react-icons/bs";
import { LuArrowUpDown } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";

const BusSearch = () => {
  const [journey, setJourney] = useState({
    from:"",
    to:"",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log(e)
    console.log(journey);
  };

  const swapValues = (e) => {
    setJourney((prev) =>({...prev, from: prev.to, to:prev.from}))
  };
  console.log(journey)

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg flex-1 flex flex-col items-center gap-8">
      <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-regal-blue text-center'>
        Enter your origin and destination
      </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-4 shadow border rounded-xl w-full py-2 sm:py-3 px-3 sm:px-5 text-gray-700'>
            <BsSendFill className="text-regal-blue text-xl sm:text-2xl" />
            <input
              className="appearance-none focus:outline-none focus:shadow-outline text-base sm:text-lg w-full"
              type="text"
              placeholder="From"
              value={journey.from}
              onChange={(e) => 
                setJourney((journey) => ({...journey, from: e.target.value})
                )}
            />
          </div>
          
          <button type='button' onClick={swapValues} className="self-center">
            <LuArrowUpDown className='text-regal-blue text-2xl sm:text-4xl md:text-5xl' />
          </button>

          <div className='flex items-center gap-4 shadow border rounded-xl w-full py-2 sm:py-3 px-3 sm:px-5 text-gray-700'>
            <IoLocationSharp className="text-regal-blue text-xl sm:text-2xl" />
            <input
              className="appearance-none focus:outline-none focus:shadow-outline text-base sm:text-lg w-full"
              type="text"
              placeholder="To"
              value={journey.to}
              onChange={(e) => 
                setJourney((journey) => ({...journey, to: e.target.value})
                )}
            />
          </div>
          
          <div className="flex items-center justify-center mt-4">
            <button
              className="bg-purple-blue text-white text-base sm:text-lg md:text-xl font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BusSearch;
