import React from "react";
import Property from "../../../images/Property.png";
import BuyProperty from "../../../images/BuyProperty.png";
import MakeInvestment from "../../../images/MakeInvestment.png";
import WorkDetails from "../WorkDetails/WorkDetails";

const worksData = [
  {
    name: "Free access to our listings search",
    image: Property,
    description: "You can search for your dream homes just in a few clicks",
  },
  {
    name: "Buy Property",
    image: BuyProperty,
    description: "Buy your sweet home with no worries",
  },
  {
    name: "Save money and time with us",
    image: MakeInvestment,
    description:
      "You can buy with the correct price in the market and save time using our web",
  },
];
const Work = () => {
  return (
    <section className="services-container mt-3">
      <div className="text-center section_headers">
        <h1>How It Works</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5">
          {worksData.map((Work) => (
            <WorkDetails Work={Work}></WorkDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
