// RouteSchema.js
const mongoose = require("mongoose");
const RouteSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Please add the name of the route"]
    },
    buses: [{
        type: String,
        required: [true, "Please add the name of the route"]
    }],
    stops: [
        {
            stop_name: {
                type: String,
                required: [true, "Please add the name of the stop"]
            },
            schedules: [
                {
                    bus: {
                        type: String,
                        required: [true, "Please add the bus"]
                    },
                    arrival_time: {
                        type: Date,
                        required: [true, "Please add the arrival time"]
                    },
                    departure_time: {
                        type: Date,
                        required: [true, "Please add the departure time"]
                    },
                    distance: {
                        type: Number,
                        required: false // Distance is optional
                    }
                }
            ]
        }
    ]
}, {
    timestamps: true,
});

module.exports = mongoose.model("Route", RouteSchema);
