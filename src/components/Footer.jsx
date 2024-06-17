import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-white">
              About Halving Solutions Ltd.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Halving Solutions Ltd. is a leading innovator in cryptocurrency
              investment, specializing in navigating halving events to maximize
              returns for our investors. Our mission is to empower individuals
              to achieve financial freedom through strategic cryptocurrency
              investments.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-white">Contact Us</h2>
            <ul className="text-gray-400 leading-relaxed">
              <li>Email: info@halvingsolutions.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-white">
              Stay Connected
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Follow us on social media to stay updated with the latest news,
              insights, and investment opportunities.
            </p>
            <div className="flex mt-4">
              <a
                href="#"
                className="mr-4 text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="mr-4 text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="mr-4 text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-sm md:text-base text-slate-400 p-4">
        &copy {new Date().getFullYear()} HalveGain. All rights reserved
      </div>
    </footer>
  );
}
