import shareClientReview from "@/models/ratingModel";
import { dbConnect } from "@/lib/db";

export async function POST(req){


    try {

    await dbConnect()

    const {ClientRating,message}= await req.json()

    const shareReiew = new shareClientReview({ClientRating,message})
    await shareReiew.save()

    return Response.json({shareReiew},{status:201})

    } catch (error) {
       return Response.json({message:error.message},{status:500})
    }


}