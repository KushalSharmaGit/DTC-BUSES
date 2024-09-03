const asyncHandler = require("express-async-handler");
const Route = require("../model/Route");

const findBusesBetweenStops = asyncHandler(async (req, res) => {
    const { from, to } = req.query;
    const availableBuses = [];

    const routes = await Route.find();

    routes.forEach(route => {
        const fromIndex = route.stops.findIndex(stop => stop.stop_name === from);
        const toIndex = route.stops.findIndex(stop => stop.stop_name === to);

        if (fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex) {
            route.buses.forEach(bus => {
                const arrivalTime = route.stops[fromIndex].schedules.find(schedule => schedule.bus === bus)?.arrival_time;
                const reachingTime = route.stops[toIndex].schedules.find(schedule => schedule.bus === bus)?.departure_time;
                const distance = route.stops[toIndex].schedules.find(schedule => schedule.bus === bus)?.distance - route.stops[fromIndex].schedules.find(schedule => schedule.bus === bus)?.distance;

                if (arrivalTime && reachingTime) {
                    availableBuses.push({
                        route_name: route.name,
                        bus_name: bus,
                        start_stop: from,
                        end_stop: to,
                        arrival_time: arrivalTime,
                        reaching_time: reachingTime,
                        distance: distance
                    });
                }
            });
        }
    });

    if (availableBuses.length === 0) {
        return res.status(404).json({ message: 'No buses found between the specified stops' });
    }

    res.status(200).json(availableBuses);
});

const getDetailedPathBetweenStops = asyncHandler(async (req, res) => {
    const { name, selectedBus, from, to } = req.query; // Getting the required data

    const route = await Route.findOne({ name });

    if (!route) {
        return res.status(404).json({ message: 'Route not found' });
    }

    const detailedPath = [];
    let startCollecting = false;

    // Loop through the stops in the route
    for (const stop of route.stops) {
        if (stop.stop_name === from) {
            startCollecting = true;
        }

        if (startCollecting) {
            const busSchedule = stop.schedules.find(schedule => schedule.bus === selectedBus);

            if (busSchedule) {
                detailedPath.push({
                    stop_name: stop.stop_name,
                    arrival_time: busSchedule.arrival_time,
                    departure_time: busSchedule.departure_time,
                    distance: busSchedule.distance
                });
            }
        }

        if (stop.stop_name === to) {
            break; // Stop collecting once we reach the end stop
        }
    }

    if (detailedPath.length === 0) {
        return res.status(404).json({ message: 'No detailed path found for the selected bus' });
    }

    res.status(200).json(detailedPath);
});

const getBuses = asyncHandler(async (req, res) => {
    const routeName = req.query.routeName || req.params.routeName; // Handle both query and URL parameters
    console.log(routeName)
    const route = await Route.findOne({ name: routeName });
    if (!route) return res.status(404).json({ message: 'Route not found' });

    // Extract bus details
    const buses = route.buses;
    const busDetails = buses.map(bus => {
        return {
            busId: bus,
            stops: route.stops.map(stop => ({
                stopName: stop.stop_name,
                schedules: stop.schedules.filter(schedule => schedule.bus === bus)
            }))
        };
    });

    res.json(busDetails);
});

module.exports = { findBusesBetweenStops, getDetailedPathBetweenStops, getBuses };
