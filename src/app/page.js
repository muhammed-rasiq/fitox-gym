import Image from "next/image";
import AboutPage from "./aboutUs/page";
import TrainersPage from "./Trainers/page";
import ClientReviewPage from "./ClientReview/page";
import MembershipPage from "./Membership/page";

export default function Home() {
  return (
   <>
   
    <div className="min-h-screen bg-black text-white">

     
      

      {/* Hero */}
      <section className="min-h-[calc(100vh-88px)] flex flex-col md:flex-row">

        {/* Image */}
        <div className="w-full md:w-1/2 h-[45vh] md:h-auto ">
         

          <Image src='/home-image-2.jpg'
           alt="Home image"
           width={500}
           height={500}
           className="w-full h-auto"
          
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex items-center px-6 py-12 md:px-16 lg:px-24">
          <div className="max-w-xl">

            <p className="text-red-500 font-semibold mb-4">
              BUILD STRENGTH. BUILD CONFIDENCE.
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              STRONGER
              <span className="block text-red-500">
                EVERY DAY
              </span>
            </h2>

            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              Transform your body and mind with expert trainers,
              powerful workouts and world-class equipment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button className="bg-red-500 px-7 py-3 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer">
                Get Started
              </button>

              <button className="border border-gray-600 px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition cursor-pointer">
                Learn More
              </button>

            </div>

          </div>
        </div>

      </section>

      {/* banner */}

         <section className="border-y border-gray-800 bg-black px-6 md:px-16 py-12 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-black text-red-500">
              15K+
            </h3>
            <p className="text-gray-400 mt-3 font-medium">
              ACTIVE MEMBERS
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-red-500">
              80+
            </h3>
            <p className="text-gray-400 mt-3 font-medium">
             Reviews
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-red-500">
              50+
            </h3>
            <p className="text-gray-400 mt-3 font-medium">
              EXPERT COACHES
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-red-500">
              24/7
            </h3>
            <p className="text-gray-400 mt-3 font-medium">
              GYM ACCESS
            </p>
          </div>

        </div>
      </section>

      <div className="mt-15">
        <AboutPage/>
      </div>

      <div className="mt-10">
        <TrainersPage/>
      </div>


       <div className="mt-10">
        <ClientReviewPage/>
      </div>

      <div className="mt-10">
       <MembershipPage/>
      </div>


      




    </div>

   
   
   </>
  );
}
