import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
   <>
   
   <nav className="flex items-center justify-between px-6 md:px-12 py-6 bg-black sticky top-0 z-50">
           <h1 className="text-2xl font-bold text-red-500">
             FITOX <span className="text-red-500">GYM</span>
           </h1>
   
           <div className="hidden md:flex gap-8 text-gray-300">
             <Link href="/" className="text-red-500">Home</Link>   
             <Link href="/aboutUs" className="hover:text-red-500">About</Link>
             <a href="#" className="hover:text-red-500">Trainers</a>
             <a href="#" className="hover:text-red-500">Review</a> 
             <a href="#" className="hover:text-red-500">Membership</a>
           </div>
   
           <button className="hidden md:block bg-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 text-white cursor-pointer">
             Join Now
           </button>
   
           <button className="md:hidden text-2xl">
             ☰
           </button>
         </nav>
   
   </>
  );
}
