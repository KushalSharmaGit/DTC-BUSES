import React from 'react';

const BusPath = () => {

    const stops = [
        {
          "stop_name": "Main Square",
          "arrival_time": "2024-09-01T09:00:00.000Z",
          "departure_time": "2024-09-01T09:05:00.000Z",
          "distance": 0
        },
        {
          "stop_name": "Elm Street",
          "arrival_time": "2024-09-01T09:10:00.000Z",
          "departure_time": "2024-09-01T09:15:00.000Z",
          "distance": 1.5
        },
        {
          "stop_name": "Oak Avenue",
          "arrival_time": "2024-09-01T09:20:00.000Z",
          "departure_time": "2024-09-01T09:25:00.000Z",
          "distance": 2.5
        },
        {
          "stop_name": "Sunset Boulevard",
          "arrival_time": "2024-09-01T09:30:00.000Z",
          "departure_time": "2024-09-01T09:35:00.000Z",
          "distance": 4
        },
        {
          "stop_name": "Lakeview Drive",
          "arrival_time": "2024-09-01T09:40:00.000Z",
          "departure_time": "2024-09-01T09:45:00.000Z",
          "distance": 5
        },
        {
          "stop_name": "Green Park",
          "arrival_time": "2024-09-01T09:50:00.000Z",
          "departure_time": "2024-09-01T09:55:00.000Z",
          "distance": 6
        }
      ];

      
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Bus Route Path
      </h1>
      <div className="space-y-4">
        {stops.map((stop, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">
              {stop.stop_name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <p className="text-gray-700">
                <strong>Arrival Time:</strong>{' '}
                {new Date(stop.arrival_time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <p className="text-gray-700">
                <strong>Departure Time:</strong>{' '}
                {new Date(stop.departure_time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <p className="text-gray-700">
                <strong>Distance:</strong> {stop.distance} km
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusPath;
