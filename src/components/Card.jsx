import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="max-w-lg">
      <div className="flex flex-col p-2 rounded-md mt-4">
        <div className="flex items-center">
          <div className="flex items-center justify-center flex-shrink-0 bg-gray-300 text-custom-blue rounded-full text-4xl h-12 w-12">
            {icon}
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm md:text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
