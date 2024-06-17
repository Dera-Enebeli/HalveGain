import React from "react";
import logo from "../asset/images/logo.svg";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

function RegisterNav() {
  return (
    <div className="flex justify-between items-center border border-green-300 sticky top-0 bg-white p-6 z-50">
      <div className="flex justify-between border border-green-300">
        <img className="image w-12 md:w-10" src={logo} alt="" />
      </div>
      <Link
        to="/"
        className="flex items-center justify-center"
        style={{ textDecoration: "none" }}
      >
        <div className="w-12 h-12 md:w-10 md:h-10 flex justify-center items-center border border-gray-700 rounded-full cursor-pointer">
          <BsArrowLeftShort className="icon text-gray-700" />
        </div>
      </Link>
    </div>
  );
}

export default RegisterNav;
