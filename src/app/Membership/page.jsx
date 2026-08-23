import Link from 'next/link';
import React from 'react';

function MembershipPage() {
  return (
    <>
    
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-red-500 font-bold uppercase tracking-widest">
          Membership Plans
        </p>

        <h1 className="text-4xl md:text-6xl font-black mt-3">
          CHOOSE YOUR <span className="text-red-500">PLAN</span>
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
          Choose the membership plan that fits your fitness goals
          and start your journey with FITOX GYM.
        </p>
      </div>


      {/* Membership Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">


        {/* Basic Plan */}
        <div className="border border-gray-800 rounded-2xl p-8 hover:border-red-500 transition">

          <h2 className="text-2xl font-bold">
            Basic
          </h2>

          <p className="text-gray-500 mt-2">
            Perfect for beginners
          </p>

          <div className="mt-6">
            <span className="text-5xl font-black">
              ₹999
            </span>

            <span className="text-gray-500">
              /month
            </span>
          </div>

          <div className="border-t border-gray-800 my-7"></div>

          <ul className="space-y-4 text-gray-300">
            <li>✓ Gym Access</li>
            <li>✓ Basic Equipment</li>
            <li>✓ Locker Facility</li>
            <li>✓ 1 Fitness Assessment</li>
          </ul>

          <Link href={'/join?plan=basic'}>
          
           <button className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-3 rounded-lg font-bold mt-8 transition cursor-pointer">
            Join Now
          </button>
          
          </Link>

         

        </div>


        {/* Premium Plan */}
        <div className="border-2 border-red-500 rounded-2xl p-8 relative">

          {/* Popular */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 px-5 py-2 rounded-full text-sm font-bold">
            MOST POPULAR
          </div>

          <h2 className="text-2xl font-bold">
            Premium
          </h2>

          <p className="text-gray-500 mt-2">
            Best for regular members
          </p>

          <div className="mt-6">
            <span className="text-5xl font-black">
              ₹1,999
            </span>

            <span className="text-gray-500">
              /month
            </span>
          </div>

          <div className="border-t border-gray-800 my-7"></div>

          <ul className="space-y-4 text-gray-300">
            <li>✓ Unlimited Gym Access</li>
            <li>✓ Personal Trainer</li>
            <li>✓ All Group Classes</li>
            <li>✓ Diet Guidance</li>
            <li>✓ Monthly Fitness Assessment</li>
          </ul>

          <Link href={'/join?plan=premium'}>
          
            <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-bold mt-8 transition cursor-pointer">
            Join Now
          </button>

          </Link>

        

        </div>


        {/* Elite Plan */}
        <div className="border border-gray-800 rounded-2xl p-8 hover:border-red-500 transition">

          <h2 className="text-2xl font-bold">
            Elite
          </h2>

          <p className="text-gray-500 mt-2">
            For serious fitness goals
          </p>

          <div className="mt-6">
            <span className="text-5xl font-black">
              ₹2,999
            </span>

            <span className="text-gray-500">
              /month
            </span>
          </div>

          <div className="border-t border-gray-800 my-7"></div>

          <ul className="space-y-4 text-gray-300">
            <li>✓ 24/7 Gym Access</li>
            <li>✓ Dedicated Personal Trainer</li>
            <li>✓ Custom Workout Plan</li>
            <li>✓ Custom Diet Plan</li>
            <li>✓ Weekly Progress Tracking</li>
          </ul>

          <Link href={'/join?plan=Elite'}>
          
           <button  className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-3 rounded-lg font-bold mt-8 transition cursor-pointer">
            Join Now
          </button>
          
          </Link>

         

        </div>

      </div>

    </section>
    
    </>
  );
}

export default MembershipPage;
