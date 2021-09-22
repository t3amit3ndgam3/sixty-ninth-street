import React from "react";
import Property from "../../../images/Property.png";
import BuyProperty from "../../../images/BuyProperty.png";
import MakeInvestment from "../../../images/MakeInvestment.png";
import WorkDetails from "../WorkDetails/WorkDetails";
const Work = () => {
  const worksData = [
    {
      name: "Find Property.",
      image: Property,
      description: "",
    },
    {
      name: "Buy Property.",
      image: BuyProperty,
      description: "",
    },
    {
      name: "Make Investment.",
      image: MakeInvestment,
      description: "",
    },
  ];
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h1 style={{ color: " #ff783d ", fontFamily: "Roboto" }}>
          How It Works
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {worksData.map((Work) => (
            <WorkDetails Work={Work}></WorkDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
