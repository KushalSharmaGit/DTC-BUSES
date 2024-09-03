import React, { useState } from 'react';
import { BsSendFill } from "react-icons/bs";
import { LuArrowUpDown } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const BusSearch = () => {
  const navigate = useNavigate();
  const [journey, setJourney] = useState({
    from: "",
    to: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/results', { state: journey });
    // try {
    //   // Pass journey parameters as query parameters
    //   const { from, to } = journey;
    //   const response = await axios.get('http://localhost:5800/api/bus/', {
    //     params: { from, to }
    //   });

    //   const data = response.data; // Axios automatically parses JSON

    //   if (response.status != 200) { // Adjust this based on your response structure
    //     return toast.error(data.message);
    //   }

    //   toast.success('Search successful!');
    //   // Handle the data as needed
    //   console.log(data)

    // } catch (error) {
    //   console.error(error);
    //   toast.error('Error Occurred!');
    // }
  };

  const swapValues = () => {
    setJourney(prev => ({ ...prev, from: prev.to, to: prev.from }));
  };

  return (
    <>
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
              onChange={(e) => setJourney(prev => ({ ...prev, from: e.target.value }))}
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
              onChange={(e) => setJourney(prev => ({ ...prev, to: e.target.value }))}
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
    </>
  );
}

export default BusSearch;
