import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    ClientRating:{
        type:String,
        required:false
    },
    message:{
        type:String,
        required:false
    }

})

const shareClientReview = mongoose.model('UserReview',reviewSchema)

export default shareClientReview;