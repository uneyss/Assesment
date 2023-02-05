import React from 'react';
import "./index.css";
import PricingCard from './components/PricingCard/PricingCard';
import data from './data';

function App() {
  return (
    <div >
      <PricingCard data={data[1]} />
    </div>
  );
}

export default App;