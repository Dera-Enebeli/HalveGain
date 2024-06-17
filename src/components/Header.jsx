import React, { useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";
// import Register from "../pages2/Register";
// import SignIn from "../pages2/SignIn";



export default function Header() {
  const [navShow, setNavShow] = useState(false);

 return (
   <header className="relative p-2 flex justify-between items-center bg-lightblue">
     <div className="flex items-center">
       <div className="h-5 w-5 md:h-8 md:w-8 rounded-full bg-custom-blue"></div>
       <h1 className="text-gray-600 font-semibold text-sm md:text-lg">
         <Link to="/">HalveGain</Link>
       </h1>
     </div>

     <nav
       className={`flex flex-col md:flex-row md:gap-4 md:justify-end absolute md:static ${
         navShow ? "left-0" : "left-full"
       } top-full w-full bg-custom-blue md:bg-transparent z-50`}
     >
       {navLinks.map((link) => (
         <Link
           key={link.id}
           to={link.url}
           className="text-white-500 text-sm sm:text-base py-2 px-4
        hover:bg-blue-300 hover:text-white md: border-b-2 md:border-transparent md:hover:border-blue-300 md:hover:bg-transparent md:hover:text-gray-600"
         >
           {link.text}
         </Link>
       ))}
     </nav>

     <div
       onClick={() => setNavShow(!navShow)}
       className="flex p-2 border hover:bg-blue-300 md:hidden border-blue-300 rounded-md cursor"
     >
       <HiMiniBars2 className="text-gray-600 font-bold text-lg" />
     </div>
   </header>
 );
}
