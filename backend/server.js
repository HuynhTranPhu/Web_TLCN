const express = require('express')
// import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));





const app = express();

app.use(bodyParser.json());

productRoute(app);
userRoute(app);


app.listen(5000,() => console.log("Server started at http://localhost:5000"));
