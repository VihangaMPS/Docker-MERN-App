const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require('dotenv');

const userRoutes = require('./userRoutes');

dotenv.config({path: './config.env'});
const app = express();
app.use(express.json());
app.use(cors());

const LocalDB = process.env.DATABASE_LOCAL; // Mongo Local
mongoose.connect(LocalDB).then(() => console.log('DB Connection successful!'));

app.use("/api/users", userRoutes);

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});