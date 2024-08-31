const cookieParser = require("cookie-parser");
const express = require("express")
const session = require("express-session");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv").config();
const errorHandler = require("./Middelware/errorHandler")
const connectDb = require('./config/dbConnection');
const MongoStore = require("connect-mongo");
//const passport = require("passport");
const passport = require("./strategies/local-startegy");
const { default: mongoose } = require("mongoose");
const { isAuthenticated } = require("./Middelware/isAuthenticated");
const { isAdmin} = require("./Middelware/isAdmin");

const {findBusesBetweenStops} =require('./contoller/busController');
const {uploadData} =require('./utils/ml');


// Connecting to the database 
connectDb();
// Defining port
const port =process.env.PORT || 5000;

// Using middelwares
app.use(express.json());
app.use(errorHandler) 
app.use(cors({
	origin: 'http://localhost:5173', 
	credentials: true
  }));



// Handling cookies and sessions 

app.use(cookieParser("helloworld"));
app.use(
		session({
			secret: "Edunex",
			saveUninitialized: true,
			resave: false,
			cookie: {
				maxAge: 60000 * 60 * 24 * 30 ,
			},
			store: MongoStore.create({
				client: mongoose.connection.getClient(),
			}),
		})
);

// Using passport 
app.use(passport.initialize());
app.use(passport.session());

// Defining the routes
app.use("/api/user" , require('./routes/userRoutes'));
app.use('/api/bus', require('./routes/busRoutes.js'))

//uploadData();


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })