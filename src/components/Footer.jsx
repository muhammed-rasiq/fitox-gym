import Link from 'next/link';
import React from 'react';

function FooterPage() {
  return (
    <>

     <footer className="bg-[#0d0d0d] text-white border-t border-gray-800">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Gym Info */}
          <div>
            <h2 className="text-3xl font-black text-red-500">
              FITOX GYM
            </h2>

            <p className="text-gray-500 leading-7 mt-5">
              Build your strength, improve your fitness,
              and become the strongest version of yourself
              with FITOX GYM.
            </p>

            <Link href={'/join'}>
            
             <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-bold mt-6 transition cursor-pointer">
              Join Us
            </button>
            </Link>

           
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Trainers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Reviews
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Membership
                </a>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-500">

              <p>
                📍 Malappuram, Kerala
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                ✉️ fitoxgym@gmail.com
              </p>

              <p>
                🕐 Mon - Sun: 5:00 AM - 11:00 PM
              </p>

            </div>
          </div>


          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Follow Us
            </h3>

            <p className="text-gray-500 leading-7 mb-5">
              Follow FITOX GYM and stay updated with
              our latest workouts, events and offers.
            </p>

            <div className="flex gap-3">

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center border border-gray-700 rounded-full hover:bg-red-500 hover:border-red-500 transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center border border-gray-700 rounded-full hover:bg-red-500 hover:border-red-500 transition"
              >
                i
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center border border-gray-700 rounded-full hover:bg-red-500 hover:border-red-500 transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center border border-gray-700 rounded-full hover:bg-red-500 hover:border-red-500 transition"
              >
                Y
              </a>

            </div>
          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-600 text-sm">

          <p>
            © 2026 FITOX GYM. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-500 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-red-500 transition">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>

    </footer>
    

    </>
  );
}

export default FooterPage;
