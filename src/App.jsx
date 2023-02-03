import React from 'react';
import "./index.css";
import PricingCard from './components/PricingCard/PricingCard';
import data from './data';

function App() {
  return (
    <div className="flex justify-center">
      <PricingCard data={data[0]} />
    </div>
  );
}

export default App;
