import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(`${process.env.mongod}`);

export default mongoose;