import mongoose from "mongoose"

export const connectDb = async ()=> {
    const {connection} = await mongoose.connect(process.env.MongoDB_URI);
    if (connection){
        console.log('Database is connected',connection.host)
    }
}