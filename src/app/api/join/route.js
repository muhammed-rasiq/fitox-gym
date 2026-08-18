import { dbConnect } from "@/lib/db";
import User from "@/models/userModel";

export async function POST(req){

       try {

         await dbConnect()

        const  {userName,Plan,PhoneNumber}= await req.json()

        const userData = new User({
            userName,
            Plan,
            PhoneNumber
        })

        await userData.save()

        return Response.json(userData,{status:200})

        

    } catch (error) {
        return Response.json({message:error.message},{status:500})
    }

    


}