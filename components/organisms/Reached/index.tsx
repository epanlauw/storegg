import React from "react";
import ReachItem from "../../molecules/ReachItem";
import Data from "./data";

const Reached = () => {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          {Data.map((item, index) => (
            <ReachItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              isLast={item.isLast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reached;
