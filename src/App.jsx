import React from "react";
import "./index.css";
import PricingCard from "./components/PricingCard/PricingCard";
import data from "./data";

function App() {
  return (
    <div className="flex flex-wrap relative">

        <PricingCard data={data[0]} />
        <PricingCard data={data[1]} />
        <PricingCard data={data[2]} />
      </div>

  );
}

export default App;
