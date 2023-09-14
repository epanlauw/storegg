import React from "react";
import StepItem from "../../molecules/StepItem";
import Data from "./data";

const TransactionStep = () => {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          {Data.map((item, index) => (
            <StepItem
              key={index}
              icon={item.icon}
              title={item.title}
              desc1={item.desc1}
              desc2={item.desc2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionStep;
