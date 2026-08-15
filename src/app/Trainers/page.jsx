import Image from 'next/image';
import React from 'react';

function TrainersPage() {
  return (
   <>
   
    <section className="bg-black text-white px-6 md:px-16 py-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-red-500 font-bold uppercase tracking-widest">
          Our Team
        </p>

        <h2 className="text-4xl md:text-5xl font-black mt-2">
          MEET OUR <span className="text-red-500">TRAINERS</span>
        </h2>
      </div>


      {/* Trainers */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Trainer 1 */}
        <div className="text-center">
          <Image
           src="/alex4.jpg"
  alt="Alex Johnson"
  width={500}
  height={500}
  className="w-36 h-36 md:w-48 md:h-48 mx-auto rounded-full object-cover border-4 border-red-500"
          />

          <h3 className="text-xl md:text-2xl font-bold mt-5">
            Alex Johnson
          </h3>

          <p className="text-gray-500 mt-1">
            Strength Coach
          </p>
        </div>


        {/* Trainer 2 */}
        <div className="text-center">
           <Image
           src="/david.jpg"
  alt="Alex Johnson"
  width={500}
  height={500}
  className="w-36 h-36 md:w-48 md:h-48 mx-auto rounded-full object-cover border-4 border-red-500"
          />

          <h3 className="text-xl md:text-2xl font-bold mt-5">
            David Smith
          </h3>

          <p className="text-gray-500 mt-1">
            Fitness Coach
          </p>
        </div>


        {/* Trainer 3 */}
        <div className="text-center">
          <Image
           src="/ryon4.jpg"
  alt="Alex Johnson"
  width={500}
  height={500}
  className="w-36 h-36 md:w-48 md:h-48 mx-auto rounded-full object-cover border-4 border-red-500"
          />

          <h3 className="text-xl md:text-2xl font-bold mt-5">
            Ryan Wilson
          </h3>

          <p className="text-gray-500 mt-1">
            Personal Trainer
          </p>
        </div>


        {/* Trainer 4 */}
        <div className="text-center">
         <Image
           src="/kayla-itsines.png"
  alt="Alex Johnson"
  width={500}
  height={500}
  className="w-36 h-36 md:w-48 md:h-48 mx-auto rounded-full object-cover border-4 border-red-500"
          />

          <h3 className="text-xl md:text-2xl font-bold mt-5">
          Kayla Itsines
          </h3>

          <p className="text-gray-500 mt-1">
            Cardio Coach
          </p>
        </div>

      </div>

    </section>
   
   </>
  );
}

export default TrainersPage;
