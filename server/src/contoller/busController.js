const asyncHandler = require("express-async-handler");
const Route = require('../model/Route'); // Adjust path to your Route model
const Bus = require('../model/Bus');     // Adjust path to your Bus model

const findBusesBetweenStops = asyncHandler( async (req,res) =>{

        const {from, to} = req.query;
        console.log(from, to)
        // Find routes containing both from and to
        const routes = await Route.find({
            'stops.stop_name': { $all: [from, to] }
        }).exec();

        let paths = new Array();
        routes.forEach(route => {
            const startIndex = route.stops.findIndex(stop => stop.stop_name === from);
            const endIndex = route.stops.findIndex(stop => stop.stop_name === to);

            // Check if the start stop is before the end stop
            if (startIndex < endIndex && startIndex !== -1 && endIndex !== -1) {
                paths.push(routes);
                console.log(routes)
            }
        });

        if(!paths){
            return res.status(400).json({
                message: "No Buses Found"
            })
        }

        res.status(200).json(paths);
    
});

module.exports= {findBusesBetweenStops}
