import React from "react";
import { pricingPlans } from "../../data";

export default function PricingCard() {
  return (
    <div className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
      <pre className="mt-12 bg-cyan-50 p-8 font-medium text-cyan-800">
        Lets Get Start Pricing Card Section !!!!
      </pre>

      <div className="mx-auto grid max-w-7x1 grid-cols-3 gap-8 py-24 px-4 sm:px-6 lg:px-8">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.title} 
            className="border border-slate-200 bg-white p-8 shadow-lg ">
            
            
            <img src={plan.logo} alt="logo" className="w-20 h-5"/>
            <h3>{plan.title}</h3>
            <p>TL {plan.price}</p>

            </div>
        ))}
      </div>

    </div>
  );
}
 