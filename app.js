import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";



const app = express();
app.use(cors());
app.use(express.json());
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);
const CONNECTION_STRING = 'mongodb+srv://tuiterDB:root1234@cluster0.o3itgjb.mongodb.net/?retryWrites=true&w=majority'
    || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);