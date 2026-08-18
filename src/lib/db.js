import mongoose from "mongoose";

const db = process.env.connectionString

// const dbConnect = mongoose.connect(db).then(()=>{
//     console.log('mongodb connected')
// }).catch((error)=>{
//     console.log("error in mongodb connecting",error)
// })


if(!db){
    throw new Error('db is not defined in .env.local')
}

export const dbConnect = async()=>{

    try {
    await mongoose.connect(db)
    console.log("mongodb connected")
    
} catch (error) {
    console.log('mongodb connecting error',error)
    throw error;
}


}

