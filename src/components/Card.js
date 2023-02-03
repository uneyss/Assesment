import React from 'react';

const Card = ({ header, content, footer }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between mb-4">
        <div className="inline-block">
          <img src={header.logo} alt={header.title} />
        </div>
        <div className="block">
          <p className="text-xl font-bold">{header.title}</p>
          <p className="text-lg font-medium">{header.price}</p>
        </div>
        {header.suggest && (
          <div className="inline-block bg-green-400 text-white px-2 py-1 rounded-full">
            Suggest
          </div>
        )}
      </div>
      <div className="text-center">
        {content.map(feature => (
          <div className="mb-4" key={feature.id}>
            <span className={`${feature.goodFeature ? 'text-green-400' : 'text-red-400'} mr-2`}>
              {feature.goodFeature ? '✔' : '✖'}
            </span>
            <span className="text-lg">{feature.title}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
          {footer}
        </button>
      </div>
    </div>
  );
};

export default Card;