import React from 'react';

function JoinPage() {
  return (
   <>
   
   <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-md bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-lg">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Join <span className="text-red-500">FITBOX</span>
          </h1>

          <p className="text-gray-400 mt-2">
            Choose your plan and start your fitness journey
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          {/* Plan */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Plan
            </label>

            <select
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
            >
              <option value="">Select a plan</option>
              <option value="basic">Basic Plan</option>
              <option value="premium">Premium Plan</option>
              <option value="pro">Elite</option>
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
   
   </>
  );
}

export default JoinPage
