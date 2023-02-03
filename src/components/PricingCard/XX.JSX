import React, {useState}from "react";
import { pricingPlans } from "../../data";

export default function PricingCard() {
  const [sortedData, setSortedData] = useState(pricingPlans.sort((a, b) => a.id - b.id));
  return (

      
      <div className="box-border flex flex-col items-start p-0 absolute w-300 h-536 border">
        {pricingPlans.map((plan) => (
          /** */
          <header 
            key={plan.id} 
            className="flex flex-col items-start padding gap-4 w-300 h-162">
            
            <h4>{plan.id}</h4>
            <img src={plan.logo} alt="logo" className="w-76 h-5 flex-none order-none grow-0"/>
            <h3 className="w-[316] h-30 font-m flex-none order-none grow-1">{plan.title}</h3>
            <p className="w-[316] h-38 font-l flex-none order-none self-stretch">₺{plan.price},00</p>

          </header>
          
          
        ))}
      </div>
  );
}
 