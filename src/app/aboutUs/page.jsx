import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function AboutPage() {
  return (
    <>
    
     <section className="bg-black text-white px-6 md:px-16 py-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <Image
            src="/about2.jpg"
            alt="FITOX GYM"
            className="w-full h-[350px] md:h-[500px] object-cover rounded-lg"
            width={500}
            height={350}
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-red-500 font-bold uppercase tracking-widest mb-3">
            About FITOX GYM
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            BUILD YOUR
            <span className="text-red-500"> STRONGEST </span>
            SELF
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            At FITOX GYM, we believe fitness is more than just lifting
            weights. It is about building confidence, discipline, strength,
            and a healthier lifestyle. Our gym is designed to give you the
            perfect environment to push your limits and become a better
            version of yourself every day. With expert trainers, modern
            equipment, powerful workout programs, and a supportive
            community, FITOX GYM is here to help you achieve your fitness
            goals and stay motivated throughout your journey.
          </p>

          <Link href={'/join'}>
          
           <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-lg font-bold text-lg transition cursor-pointer">
            Join Us
          </button>
          
          </Link>

         
        </div>

      </div>

    </section>
    
    </>
  );
}

export default AboutPage;
