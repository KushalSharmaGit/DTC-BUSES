const Bus = require("../model/Bus");
const Route = require("../model/Route");

const sampleBuses = [
    { bus_id: "Bus101", crew: { driver: "66d2afc8e571fde8cd94442d", conductor: "66d2b08d54df833307c8cf2b" } },
]
const sampleRoute = {
    name: "Route B",
    buses: ["Bus101", "Bus102", "Bus103"], // Added more bus IDs
    stops: [
        {
            stop_name: "Main Square",
            schedules: [
                { 
                    bus: "Bus101", 
                    arrival_time: new Date("2024-09-01T09:00:00Z"), 
                    departure_time: new Date("2024-09-01T09:05:00Z"), 
                    distance: 0 
                },
                { 
                    bus: "Bus102", 
                    arrival_time: new Date("2024-09-01T09:10:00Z"), 
                    departure_time: new Date("2024-09-01T09:15:00Z"), 
                    distance: 0 
                }
            ]
        },
        {
            stop_name: "Elm Street",
            schedules: [
                { 
                    bus: "Bus101", 
                    arrival_time: new Date("2024-09-01T09:10:00Z"), 
                    departure_time: new Date("2024-09-01T09:15:00Z"), 
                    distance: 1.5 
                },
                { 
                    bus: "Bus102", 
                    arrival_time: new Date("2024-09-01T09:20:00Z"), 
                    departure_time: new Date("2024-09-01T09:25:00Z"), 
                    distance: 1.5 
                },
                { 
                    bus: "Bus103", 
                    arrival_time: new Date("2024-09-01T09:30:00Z"), 
                    departure_time: new Date("2024-09-01T09:35:00Z"), 
                    distance: 1.5 
                }
            ]
        },
        {
            stop_name: "Oak Avenue",
            schedules: [
                { 
                    bus: "Bus101", 
                    arrival_time: new Date("2024-09-01T09:20:00Z"), 
                    departure_time: new Date("2024-09-01T09:25:00Z"), 
                    distance: 2.5 
                },
                { 
                    bus: "Bus103", 
                    arrival_time: new Date("2024-09-01T09:35:00Z"), 
                    departure_time: new Date("2024-09-01T09:40:00Z"), 
                    distance: 2.5 
                }
            ]
        },
        {
            stop_name: "Sunset Boulevard",
            schedules: [
                { 
                    bus: "Bus101", 
                    arrival_time: new Date("2024-09-01T09:30:00Z"), 
                    departure_time: new Date("2024-09-01T09:35:00Z"), 
                    distance: 4 
                },
                { 
                    bus: "Bus102", 
                    arrival_time: new Date("2024-09-01T09:40:00Z"), 
                    departure_time: new Date("2024-09-01T09:45:00Z"), 
                    distance: 4 
                }
            ]
        },
        {
            stop_name: "Lakeview Drive",
            schedules: [
                { 
                    bus: "Bus101", 
                    arrival_time: new Date("2024-09-01T09:40:00Z"), 
                    departure_time: new Date("2024-09-01T09:45:00Z"), 
                    distance: 5 
                },
                { 
                    bus: "Bus102", 
                    arrival_time: new Date("2024-09-01T09:50:00Z"), 
                    departure_time: new Date("2024-09-01T09:55:00Z"), 
                    distance: 5 
                },
                { 
                    bus: "Bus103", 
                    arrival_time: new Date("2024-09-01T10:00:00Z"), 
                    departure_time: new Date("2024-09-01T10:05:00Z"), 
                    distance: 5 
                }
            ]
        },
        {
            stop_name: "Green Park",
            schedules: [
                { 
                    bus: "Bus101", 
                    arrival_time: new Date("2024-09-01T09:50:00Z"), 
                    departure_time: new Date("2024-09-01T09:55:00Z"), 
                    distance: 6 
                },
                { 
                    bus: "Bus102", 
                    arrival_time: new Date("2024-09-01T10:10:00Z"), 
                    departure_time: new Date("2024-09-01T10:15:00Z"), 
                    distance: 6 
                }
            ]
        },
        {
            stop_name: "River Side",
            schedules: [
                { 
                    bus: "Bus101", 
                    arrival_time: new Date("2024-09-01T10:00:00Z"), 
                    departure_time: new Date("2024-09-01T10:05:00Z"), 
                    distance: 7 
                },
                { 
                    bus: "Bus103", 
                    arrival_time: new Date("2024-09-01T10:15:00Z"), 
                    departure_time: new Date("2024-09-01T10:20:00Z"), 
                    distance: 7 
                }
            ]
        },
        {
            stop_name: "City Center",
            schedules: [
                { 
                    bus: "Bus101", 
                    arrival_time: new Date("2024-09-01T10:10:00Z"), 
                    departure_time: new Date("2024-09-01T10:15:00Z"), 
                    distance: 8 
                },
                { 
                    bus: "Bus102", 
                    arrival_time: new Date("2024-09-01T10:20:00Z"), 
                    departure_time: new Date("2024-09-01T10:25:00Z"), 
                    distance: 8 
                },
                { 
                    bus: "Bus103", 
                    arrival_time: new Date("2024-09-01T10:30:00Z"), 
                    departure_time: new Date("2024-09-01T10:35:00Z"), 
                    distance: 8 
                }
            ]
        }
    ]
};


async function uploadData() {
    try {

        // Insert Route
        const route = await Route.create(sampleRoute);
        console.log("Route inserted:", route);

    } catch (error) {
        console.error("Error uploading data:", error);
    }
}

module.exports ={uploadData}