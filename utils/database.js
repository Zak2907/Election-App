import mongoose from "mongoose";
const url = 'mongodb+srv://zakariamohamed2907:58My2k3YDLDXSi0E@cluster0.ztegvi7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0.'

let isConnected=false

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true)

    if(isConnected){
        console.log("Mongo is already connected")
        return
    }

    try{
        await mongoose.connect(url)

        isConnected=true
        console.log("connected to mongodb")
    }
    catch(e){
        console.log(e)
    }



}