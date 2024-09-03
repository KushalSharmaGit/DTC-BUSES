import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const RouteResults = () => {
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const routeName = location.state; // Access routeName from location state

    useEffect(() => {
        if (routeName) {
            fetchBuses();
        }
    }, [routeName]);

    const fetchBuses = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:5800/api/bus/buses/?routeName=${routeName}`);
            setBuses(response.data);
        } catch (err) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    if (!routeName) {
        return <div className="text-center text-lg">No route selected</div>;
    }

    return (
        <div className="container mx-auto p-4">
            {loading && <div className="text-center text-lg">Loading...</div>}
            {error && <div className="text-center text-lg text-red-500">{error}</div>}

            {buses.length > 0 ? (
                buses.map((bus) => (
                    <div key={bus.busId} className="bg-white shadow-md rounded-lg mb-4 p-4">
                        <h2 className="text-2xl font-bold mb-2">Bus ID: {bus.busId}</h2>
                        <div>
                            {bus.stops.map((stop) => (
                                <div key={stop.stopName} className="mb-4">
                                    <h3 className="text-xl font-semibold mb-1">{stop.stopName}</h3>
                                    {stop.schedules.length > 0 ? (
                                        <ul>
                                            {stop.schedules.map((schedule) => (
                                                <li key={schedule._id} className="flex justify-between mb-2">
                                                    <div>
                                                        <span className="font-medium">Arrival:</span> {new Date(schedule.arrival_time).toLocaleTimeString()}
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Departure:</span> {new Date(schedule.departure_time).toLocaleTimeString()}
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Distance:</span> {schedule.distance} km
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No schedules available for this stop.</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center text-lg">No buses found for this route.</div>
            )}
        </div>
    );
};

export default RouteResults;
