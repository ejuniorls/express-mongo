import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";

dotenv.config()

async function conectaNaDatabase() {
    mongoose.connect(process.env.DBCONN);

    return mongoose.connection;
}

export default conectaNaDatabase;