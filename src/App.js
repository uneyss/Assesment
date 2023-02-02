import React from "react";
import './index.css';
import PricingCard from "./components/PricingCard/PricingCard";

export default function App() {
  return (
    <div className="App">
        <h1 className="text-3 font-bold underline">Hello worldss!</h1>
        <h1 className="text-3 font-bold underline">Lets Get Start!</h1>

      <PricingCard
        title="Basic Plan"
        logo="basic-plan-logo.png"
        priceText="$10/month"
        features={[
          { id: 1, 
            title: "Feature 1", 
            goodFeature: true },
          { id: 2, 
            title: "Feature 2", 
            goodFeature: false },
          { id: 3, 
            title: "Feature 3", 
            goodFeature: true },
          { id: 4, 
            title: "Feature 4", 
            goodFeature: false }
        ]}
        buttonText="Subscribe"
      />
    </div>
  );
}