import mongoose from "mongoose";
import 'dotenv/config';

const conn = `${process.env.mongod}`

mongoose.connect(conn);

export default mongoose;