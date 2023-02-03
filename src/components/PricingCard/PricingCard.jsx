import React from "react";

const PricingCard = ({ data }) => (
  <div className="box-border flex flex-col items-start p-0 absolute w-300 h-536 border">
    {data.suggest && (
      <div
        style={{ backgroundColor: "blue", color: "white", padding: "12px" }}
        className="flex flex-col items-start"
      >
        Best Choice
      </div>
    )}
    <img className="w-76 h-5 flex-none order-none grow-0" src={data.logo} alt={data.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{data.title}</div>
      <p className="text-gray-700 text-base">Price: ${data.price}</p>
    </div>
    <div className="px-6 py-4">
      <ul>
        {data.features.map((feature) => (
          <li
            key={feature.id}
            className={`text-gray-700 mb-2 ${
              feature.goodFeature ? "text-green-500" : "text-gray-500"
            }`}
          >
            {!feature.goodFeature && (
              <span className="text-gray-500">&#x2717; </span>
            )}
            {feature.goodFeature && (
              <span className="text-green-500">&#x2713; </span>
            )}
            {feature.title}
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 py-4 bg-gray-200">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button>
    </div>
  </div>
);

export default PricingCard;
