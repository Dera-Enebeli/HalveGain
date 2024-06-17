import React, { useState } from "react";
import { BsEnvelopePaper } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-900 p-2 rounded-lg shadow-lg max-w-lg w-full">
        <img
          src="src/assets/images/new_ai.png"
          alt=""
          className="opacity-0 absolute top-0 left-0 w-full h-[25rem] object-cover rounded-t-lg"
        />
        <div className="text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Contact HalveGain Support
          </h3>
          <p className="text-lg md:text-xl">
            We are always online and active for you
          </p>
        </div>
      </div>

      <form
        className="bg-gray-800 shadow-lg rounded-lg p-5 grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-md gap-3 md:gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-4 md:col-span-2">
          <div className="bg-custom-blue rounded-full h-10 w-10 md:h-16 md:w-16 grid place-items-center text-main text-xl md:text-3xl">
            <BsEnvelopePaper />
          </div>
          <h3 className="text-2xl text-custom-blue md:text-3xl font-bold text-main">
            Drop us a message
          </h3>
        </div>
        <input
          type="text"
          placeholder="Your name"
          required
          className="rounded-md border-2 border-gray-400 py-2 px-4 text-sm md:text-base outline-none focus:border-main"
        />

        <input
          type="text"
          placeholder="Surname"
          required
          className="rounded-md border-2 border-gray-400 py-2 px-4 text-sm md:text-base outline-none focus:border-main"
        />

        <input
          type="email"
          placeholder="@gmail.com"
          required
          className="rounded-md border-2 border-gray-400 py-2 px-4 text-sm md:text-base outline-none focus:border-main"
        />

        <div className="rounded-md border-2 border-gray-400 py-2 px-4 text-sm md:text-base outline-none focus:border-main">
          <PhoneInput
            flags={flags}
            defaultCountry="NG"
            international
            onChange={(value) => setPhone(value)}
            value={phone}
          />
        </div>

        <textarea
          name=""
          required
          placeholder="Enter your message"
          id=""
          cols="30"
          rows="10"
          className="rounded-md border-2 border-gray-400 py-2 px-4 text-sm md:text-base outline-none focus:border-main md:col-span-2"
        ></textarea>

        <button
          type="submit"
          className="rounded-md bg-main text-custom-blue py-2 px-4 text-sm md:text-base outline-none md:col-span-2 hover:bg-custom-blue hover:text-white transition duration-300"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
