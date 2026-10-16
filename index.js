
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 6202;
// ✅ Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors()); // ❌ You had `app.use(cors)` which is wrong, it must be called
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


// Routers

const Admin = require('./router/admin');
const Event = require('./router/event');
const Gallery = require('./router/gallery');
const User = require('./router/user');
const Image = require('./router/image');




// Routes
app.use('/admin', Admin);
app.use('/gallery',Gallery);
app.use('/event', Event);
app.use('/image', Image);
app.use('/user', User);

// ✅ Root route
app.get("/", (req, res) => {
console.log("server on")
  res.send("AI Agent API running ✅");
});


app.listen(port, () => {
            console.log(`SERVER STARTED 💐 PORT ${port}`);
        });
// MongoDB + Server Init
mongoose
    .connect(process.env.MYDB_CONNECTION)
    .then(() => {
        console.log("Connected to MongoDB 💐");

        
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

