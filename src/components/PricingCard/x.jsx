import React from "react";
import CheckMark from "../../svg/checkmark.svg";
import CheckMarkNegative from "../../svg/checkmark-negative.svg"



const PricingCard = ({ data }) => (
  <div className="card gray">
    {data.suggest && (
      <div

        className="suggest"
      >
        Best Choice
      </div>
    )}
    <header className="layout">
      <img
        className="logo"
        alt="logo"
        src={data.logo}
      />

      <h1 className="font-m font-Roboto">{data.title}</h1>
      <p className="font-l font-Roboto">₺{data.price},00</p>
    </header>
    <main className="box-border flex-col items-start p-0 absolute w-[18.75rem] h-[31.5rem] top-0 bg[#FFFFFF] ">
      <hr className="line" />
      <ul className="check-items">
        {data.features.map((feature) => (
          <li
            key={feature.id}
            className={`font-s ${
              feature.goodFeature ? "text-green-500" : "text-gray-500"
            }`}
          >
            {!feature.goodFeature && (

              <img src={CheckMarkNegative} alt="checkmark-negative" className="mr-2 inline " />
            )}
            {feature.goodFeature && (
              <img src={CheckMark} alt="checkmark" className="mr-2 inline  " />
            )}
            {feature.title}
          </li>
        ))}
      </ul>
    </main>

    <footer className="footer">
      <div className="actions">
        <button className="button">
          <p className="plan-text font-Roboto">Planı Seç</p> 
        </button>
      </div>
    </footer>
  </div>
);

export default PricingCard;
