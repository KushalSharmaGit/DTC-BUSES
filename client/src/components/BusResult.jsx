import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from './NavBar';

const BusResult = () => {
  const [routes, setRoutes] = useState([]);
  const location = useLocation();
  const journey = location.state;

  useEffect(() => {
    const handelSearch = async () => {
      if (!journey) {
        return toast.error('Journey data is missing!');
      }

      try {
        const { from, to } = journey;
        const response = await axios.get('http://localhost:5800/api/bus/', {
          params: { from, to },
        });

        const data = response.data;
        console.log(data);
        if (response.status !== 200) {
          return toast.error(data.message);
        }

        toast.success('Search successful!');
        setRoutes(data);
      } catch (error) {
        console.error(error);
        toast.error('Error occurred while fetching routes!');
      }
    };

    handelSearch();
  }, [journey]);


  // Handeling the bus details on click
  // const handleBusClick = (route) => {
  //   navigate('/bus-detail', { state: { route } });
  // };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
      {routes.length > 0 ? (
        routes.map((route, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200 cursor-pointer"
            onClick={() => handleBusClick(route)}
          >
            <h2 className="text-xl font-bold mb-2">{route.route_name}</h2>
            <p className="text-gray-700">
              <strong>Bus Name:</strong> {route.bus_name}
            </p>
            <p className="text-gray-700">
              <strong>Start Stop:</strong> {route.start_stop}
            </p>
            <p className="text-gray-700">
              <strong>End Stop:</strong> {route.end_stop}
            </p>
            <p className="text-gray-700">
              <strong>Arrival Time:</strong> {new Date(route.arrival_time).toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No routes found.</p>
      )}
    </div>

    </>
  );
};

export default BusResult;
