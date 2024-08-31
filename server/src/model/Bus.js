const mongoose = require("mongoose");

const BusSchema = mongoose.Schema({
    bus_id: {
        type: String,
        required: [true, "Please add the bus ID"],
        unique: true,
    },
    crew: {
        driver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Please add the driver"]
        },
        conductor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Please add the conductor"]
        }
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Bus", BusSchema);
