import mongoose from "mongoose";
import 'dotenv/config';

const conn = 'mongodb://localhost:27017/Project-one' //|| process.env.mongod

mongoose.connect(conn);

export default mongoose;