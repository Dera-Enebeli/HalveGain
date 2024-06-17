import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Register() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isRevealed1, setIsRevealed1] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userName: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, userName, number, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-body transition-all">
      {/* <RegisterNav /> */}
      <div className="flex justify-between items-center border-b-2 border-greenyellow sticky top-0 bg-white p-6 z-50">
        <div className="flex justify-between border border-green-300">
          {/* <img className="image w-12 md:w-10" src={logo} alt="" /> */}
        </div>
        <Link
          to="/"
          className="flex items-center justify-center"
          style={{ textDecoration: "none" }}
        >
          <div className="w-12 h-12 md:w-10 md:h-10 flex justify-center items-center border border-gray-700 rounded-full cursor-pointer">
            <BsArrowRightShort className="icon text-gray-700" />
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center">
        <div className="middleContent flex flex-col items-center gap-8 py-8 px-20">
          <div className="text text-center">
            <p className="text-3xl font-bold text-darkblue">Relax and Trade.</p>
            <p className="text-lg font-bold text-gray">
              Nothing has to be stressful
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="formInputs">
              <input
                onChange={handleChange}
                value={name}
                id="name"
                type="text"
                placeholder="What's your Full Name?"
                className="input-field"
              />
            </div>
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
            {/* Other input fields */}
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
                placeholder="Create a Password"
                className="input-field"
              />
            </div>
            {/* Other input fields */}
            <div className="submit flex justify-between items-center mt-4">
              <button className="btn">
                Create Account <BsArrowRightShort className="icon" />
              </button>
              <p>
                Got an account?{" "}
                <Link to="/" className="text-lightblue font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
