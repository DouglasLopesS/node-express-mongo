import mongoose from "mongoose";

async function conectaNaDatatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;    
};

export default conectaNaDatatabase;