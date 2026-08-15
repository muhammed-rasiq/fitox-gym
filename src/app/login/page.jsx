import React from 'react';

function LoginPage() {
  return (
   <>
   
   <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black">
            WELCOME TO <span className="text-red-500">FITOX</span>
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue your fitness journey
          </p>
        </div>


        {/* Login Form */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8">

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


          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
            />
          </div>


          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-6 text-sm">

            <label className="flex items-center gap-2 text-gray-500">
              <input
                type="checkbox"
                className="accent-red-500"
              />
              Remember me
            </label>

            <a
              href="#"
              className="text-red-500 hover:text-red-400"
            >
              Forgot Password?
            </a>

          </div>


          {/* Login Button */}
          <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-bold text-lg transition">
            Login
          </button>


          {/* Register */}
          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-red-500 hover:text-red-400 font-semibold"
            >
              Register
            </a>
          </p>

        </div>

      </div>

    </section>
   
   </>
  );
}

export default LoginPage;
