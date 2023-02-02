import React from 'react';


const PricingCard = (props) => {
  return (
    <div className="w-64 h-64 bg-white p-6 rounded-lg shadow-md">
      <header className="flex justify-between">
        <h3 className="text-lg font-medium">{props.title}</h3>
        <img className="w-10 h-10" src={props.logo} alt="logo" />
        <p className="text-lg font-medium">{props.priceText}</p>
      </header>
      <main className="flex flex-col mt-6">
        {props.features.map((feature) => (
          <div key={feature.id} className="flex justify-between items-center mt-2">
            <p className="text-sm">{feature.title}</p>
            {feature.goodFeature && <img className="w-6 h-6" src="good-feature-logo.png" alt="good-feature-logo" />}
          </div>
        ))}
      </main>
      <footer className="flex justify-center mt-6">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">{props.buttonText}</button>
      </footer>
    </div>
  );
};

export default PricingCard;