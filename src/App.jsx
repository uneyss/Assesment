import React from "react";
import "./index.css";
import PricingCard from "./components/PricingCard/PricingCard";
import data from "./data";

function App() {
  return (
    <div className="flex flex-wrap relative ">
      {/* Card Component'i burada çağırılıyor sağ taraftaki id={} modal screenimizi açıyor ve seçili component'teki data'ları alıyor */}

        <PricingCard data={data[0]} id={data[0].id} />
        <PricingCard data={data[1]} id={data[1].id}/>
        <PricingCard data={data[2]} id={data[2].id}/>
      </div>

  );
}

export default App;
