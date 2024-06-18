import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignIn() {
  const navigate = useNavigate();
  const [isRevealed, setIsRevealed] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="bg-body h-screen transition-all">
      {/* Navigation */}
      <div className="flex justify-between items-center border-b-2 border-greenyellow sticky top-0 bg-white p-6 z-50">
        {/* Logo */}
        <div className="flex justify-between border border-green-300">
          {/* <img className="image w-12 md:w-10" src={logo} alt="" /> */}
        </div>
        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center justify-center"
          style={{ textDecoration: "none" }}
        >
          <div className="w-12 h-12 md:w-10 md:h-10 flex justify-center items-center border border-gray-700 rounded-full cursor-pointer">
            <BsArrowRightShort className="text-red-700" />
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center">
        <div className="middleContent flex flex-col items-center gap-8 py-8 px-20">
          {/* Text Content */}
          <div className="text text-center">
            <p className="text-3xl text-blue-600 font-bold text-darkblue">
              Hop Right Back In.
            </p>
            <p className="text-lg font-bold text-gray">Sign in to continue</p>
            {/* Social Icons (if available) */}
            <div className="socials">
              {/* Render social icons here if needed */}
            </div>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            {/* Email Input */}
            <div className="formInputs">
              <input
                onChange={handleChange}
                value={email}
                id="email"
                type="email"
                placeholder="Drop your Email"
                className="input-field"
              />
            </div>
            {/* Password Input */}
            <div className="formInputs relative">
              <div className="absolute top-0 right-0">
                {!isRevealed ? (
                  <AiOutlineEye
                    onClick={() => setIsRevealed(!isRevealed)}
                    className="passwordEye"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setIsRevealed(!isRevealed)}
                    className="passwordEye"
                  />
                )}
              </div>
              <input
                onChange={handleChange}
                value={password}
                id="password"
                type={isRevealed ? "text" : "password"}
                placeholder="Password"
                className="input-field"
              />
            </div>
            {/* Submit Button */}
            <div className="submit flex justify-between items-center mt-4">
              <button className="btn">
                Get me in <BsArrowRightShort className="icon" />
              </button>
              {/* Forgot Password Link */}
              <p className="forgot">Forgot your password?</p>
            </div>
          </form>
        </div>
      </div>

      {/* Redirect to Register */}
      <div className="mt-6 mr-24 text-right md:text-center">
        <p className="text-darkblue font-semibold">
          New User? &nbsp;
          <Link to="/register" className="text-lightblue font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
