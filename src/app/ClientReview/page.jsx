import React from 'react';

function ClientReviewPage() {
  return (
    <>
    
     <section className="bg-black text-white px-6 md:px-16 py-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-red-500 font-bold uppercase tracking-widest">
          Client Reviews
        </p>

        <h2 className="text-4xl md:text-5xl font-black mt-2">
          WHAT OUR <span className="text-red-500">CLIENTS SAY</span>
        </h2>
      </div>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">


        {/* Left Side - Reviews */}
        <div className="space-y-8">

          {/* Review 1 */}
          <div className="border border-gray-800 rounded-xl p-6">

            <div className="flex items-center gap-4">

              <img
                src="/client1.jpg"
                alt="Client"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold">
                  Razip
                </h3>

                <p className="text-gray-500 text-sm">
                  razipanagattuthodi@gmail.com
                </p>
              </div>

            </div>

            {/* Stars */}
            <div className="text-yellow-400 text-xl mt-4">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-gray-400 leading-7 mt-3">
              FITOX GYM has completely changed my fitness journey.
              The trainers are supportive, the equipment is excellent,
              and the atmosphere keeps me motivated every day.
            </p>

          </div>


          {/* Review 2 */}
          <div className="border border-gray-800 rounded-xl p-6">

            <div className="flex items-center gap-4">

              <img
                src="/client2.jpg"
                alt="Client"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold">
                  Arjun
                </h3>

                <p className="text-gray-500 text-sm">
                  arjun@gmail.com
                </p>
              </div>

            </div>

            <div className="text-yellow-400 text-xl mt-4">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-gray-400 leading-7 mt-3">
              Amazing gym with great trainers and a friendly environment.
              I have seen a big improvement in my strength and confidence
              since joining FITOX GYM.
            </p>

          </div>

        </div>


        {/* Right Side - Add Review */}
        <div className="border border-gray-800 rounded-xl p-6 md:p-8">

          <h3 className="text-3xl font-bold">
            Add Your <span className="text-red-500">Review</span>
          </h3>

          <p className="text-gray-500 mt-2">
            Share your experience with FITOX GYM.
          </p>


          {/* Name */}
          {/* <div className="mt-6">
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
            />
          </div> */}


          {/* Email */}
          {/* <div className="mt-5">
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
            />
          </div> */}


          {/* Rating */}
          <div className="mt-5">
            <label className="block mb-2 font-medium">
              Rating
            </label>

            <div className="text-yellow-400 text-2xl">
              ★ ★ ★ ★ ★
            </div>
          </div>


          {/* Review */}
          <div className="mt-5">
            <label className="block mb-2 font-medium">
              Review
            </label>

            <textarea
              rows="5"
              placeholder="Write your review..."
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 resize-none"
            ></textarea>
          </div>


          {/* Button */}
          <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-bold mt-6 transition cursor-pointer">
            Submit Review
          </button>

        </div>

      </div>

    </section>
    
    </>
  );
}

export default ClientReviewPage;
