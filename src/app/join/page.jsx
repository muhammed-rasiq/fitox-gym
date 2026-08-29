// 'use client';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// function JoinPage() {
  
//   const [userData,setUserData]=useState({
//     userName:'',
//     Plan:'',
//     PhoneNumber:''
//   })

//  const searchParams = useSearchParams();

//   const handleUserData = async(e)=>{
//      e.preventDefault();

//     const response = await fetch('/api/join',{
//       method:'POST',
//       headers:{
//        "Content-Type": "application/json"
//       },
//       body:JSON.stringify(userData)
//     })

//     const data = await response.json()
//     console.log(data)

//     if(response.status==201){
//       alert('you joined')
      
//     }

//      setUserData({userName:'',
//     Plan:'',
//     PhoneNumber:''})

   

    

//   }

//   useEffect(()=>{
//     const plan = searchParams.get('plan')

//     if(plan){
//       setUserData((prev)=>({
//         ...prev,
//         Plan:plan
        
//       }))
//     }

//   },[searchParams])

//   return (
//    <>
   
//    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      
//       <div className="w-full max-w-md bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-lg">
        
        
//         <div className="text-center mb-8">
//           <h1 className="text-3xl sm:text-4xl font-bold">
//             Join <span className="text-red-500">FITBOX</span>
//           </h1>

//           <p className="text-gray-400 mt-2">
//             Choose your plan and start your fitness journey
//           </p>
//         </div>

      
//         <form className="space-y-5" onSubmit={handleUserData}>

          
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Name
//             </label>

//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
//               value={userData.userName}
//               onChange={(e)=>setUserData({...userData,userName:e.target.value})}
//             />
//           </div>

     
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Plan
//             </label>

//             <select
//               className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
//                onChange={(e)=>setUserData({...userData,Plan:e.target.value})}
//                value={userData.Plan}
//             >
//               <option value="">Select a plan</option>
//               <option value="basic">Basic Plan</option>
//               <option value="premium">Premium Plan</option>
//               <option value="Elite">Elite</option>
//             </select>
//           </div>

       
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Phone Number
//             </label>

//             <input
//               type="tel"
//               placeholder="Enter your phone number"
//               className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
//                onChange={(e)=>setUserData({...userData,PhoneNumber:e.target.value})}
//                value={userData.PhoneNumber}
//             />
//           </div>

      
//           <button
//             type="submit"
//             className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
            
//           >
//             Submit
//           </button>

//         </form>
//       </div>
//     </div>
   
//    </>
//   );
// }

// export default JoinPage



import { Suspense } from "react";
import JoinForm from "./JoinForm";

export default function JoinPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JoinForm />
    </Suspense>
  );
}