import Image from "next/image";

export default function Home() {
  return (
   <>
   
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <h1 className="text-2xl font-bold">
          POWER<span className="text-red-500">GYM</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="text-red-500">Home</a>
          <a href="#" className="hover:text-red-500">About</a>
          <a href="#" className="hover:text-red-500">Programs</a>
          <a href="#" className="hover:text-red-500">Contact</a>
        </div>

        <button className="hidden md:block bg-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-600">
          Join Now
        </button>

        <button className="md:hidden text-2xl">
          ☰
        </button>
      </nav>

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

              <button className="bg-red-500 px-7 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                Get Started
              </button>

              <button className="border border-gray-600 px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                Learn More
              </button>

            </div>

          </div>
        </div>

      </section>
    </div>
   
   </>
  );
}
