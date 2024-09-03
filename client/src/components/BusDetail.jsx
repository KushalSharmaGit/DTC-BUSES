import React from 'react';
import { useLocation } from 'react-router-dom';

const BusDetail = () => {
  const location = useLocation();
  const { route } = location.state || {};

  if (!route) {
    return <p>No bus details found!</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{route.route_name} Details</h2>
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
      {/* Add more details as needed */}
    </div>
  );
};

export default BusDetail;
