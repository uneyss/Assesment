import React from "react";
import CheckMark from "../../svg/checkmark.svg";
import CheckMarkNegative from "../../svg/checkmark-negative.svg"



const PricingCard = ({ data }) => (
  <><>{data.suggest && (
    <div

      className="flex flex-row relative justify-center items-start p-3 gap-2 w-[23.75rem] h-[3rem] bg-[#0049E6] flex-none order- self-stretch grow-0"
    >
      <h1 className="w-[3.75rem] h-[1.5rem] font-roboto not-italic font-medium text-base text-[#FFFFFF] flex-none order-none grow-0">Önerilen</h1>
    </div>
  )}
  </><div className="box-border flex flex-col items-start p-0 relative w-[23.75rem] h-[33.5rem] top-0 bg[#FFFFFF] gray-200 flex-none order-none self-stretch grow-0">

      <header className="flex flex-col items-start pt-8 pb-0 px-8 gap-4 w-[23.75rem] h-[10.125rem] flex-none order-none self-stretch grow-0">
        <img
          className="w-[4.75rem] h-[1.32rem] flex-none order-none grow-0"
          alt="logo"
          src={data.logo} />
        <div className="flex flex-row items-start p-0 gap-4 w-[19.75rem] h-[1.875rem] flex-none order-1 self-stretch grow-0">
          <h1 className="w-[19.75rem] h-[1.875rem]  not-italic font-Roboto text-xl font-medium text-[#364153] flex-none order-none grow-1">{data.title}</h1>
        </div>

        <div className="flex flex-col items-start p-0 gap-1 w-[19.75rem] h-[2.375rem] flex-none order-2 slef-stretch grow-0">
          <p className="w-[19.75rem] h-[2.375rem]  not-italic font-Roboto font-semibold text-3xl  text-[#111729] flex-none order-none self-stretch grow-0">₺{data.price},00</p>
        </div>

      </header>
      <main className="flex flex-col items-start  pt-6 px-8 pb-10 w-[23.75rem] h-[18rem] flex-none order-1 self-stretch grow-0">
        <hr className="w-[19.75rem] h-0 pb-4 borders flex-none order-0 self-stretch grow-0" />
        <div className="flex flex-col items-start p-0 gap-4 w-[19.75rem] h-[11.5rem] flex-none order-1 self-stretch grow-0">
          {data.features.map((feature) => (
            <p
              key={feature.id}
              className={`w-[17.5rem] h-[1.5rem]  not-italic font-Roboto text-base font-medium text-[#364153] flex-none order-none self-stretch grow-0 ${feature.goodFeature ? "" : "text-[##677389] opacity-60"}`}
            >
              {!feature.goodFeature && (

                <img src={CheckMarkNegative} alt="checkmark-negative" className="mr-2 inline " />
              )}
              {feature.goodFeature && (
                <img src={CheckMark} alt="checkmark" className="mr-2 inline  " />
              )}
              {feature.title}
            </p>
          ))}
        </div>
      </main>

      <footer className="flex flex-col items-start pt-0 px-8 pb-8 gap-6 w-[23.75rem] h-[5rem] flex-none order-2 self-stretch grow-0">
        <div className="flex flex-col items-start p-0 gap-3 w-[19.75rem] h-[3rem] flex-none order-none self-stretch grow-0">
          <button className="flex flex-row justify-center items-center py-3 px-5 gap-2 w-[19.75rem] h-[3rem] bg-[#0049E6] shadow-sm rounded-lg flex-none order-none self-stretch grow-0">
            <p className="w-[4.20rem] h-[1.5rem] font-Roboto not-italic font-medium text-base text-[#FFFFFF] order-1 grow-0">Planı Seç</p>
          </button>
        </div>
      </footer>
    </div></>
);

export default PricingCard;
