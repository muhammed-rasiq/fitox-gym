import React from 'react';

function RegisterPage() {
  return (
   <>
   
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-11">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black">
            JOIN <span className="text-red-500">FITOX</span>
          </h1>

          <p className="text-gray-500 mt-3">
            Start your fitness journey with us
          </p>
        </div>


        {/* Register Form */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8">

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
            />
          </div>


          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
            />
          </div>


          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
            />
          </div>

         


          {/* Button */}
          <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-bold text-lg transition">
            Register Now
          </button>

           <p className="text-center text-gray-500 mt-6">
            Have an account? {" "}
            <a
              href="/login"
              className="text-red-500 hover:text-red-400 font-semibold"
            >
              Register
            </a>
          </p>



        </div>


        {/* Bottom Text */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Ready to become stronger? Join FITOX GYM today.
        </p>

      </div>

    </section>
   
   </>
  );
}

export default RegisterPage;
