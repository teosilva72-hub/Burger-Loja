import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect('mongodb://localhost:27017/Project-one');

export default mongoose;