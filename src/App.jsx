import React from 'react';
import "./index.css";
import PricingCard from './components/PricingCard/PricingCard';
import data from './data';

function App() {
  return (
    <div className="mt-10 ml-10">
      <PricingCard data={data[0]} />
    </div>
  );
}

export default App;
