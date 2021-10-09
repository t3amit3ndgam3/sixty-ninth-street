import React, { useState } from "react";
import Flat1 from "../../../images/Flat1.jpg";
import Flat2 from "../../../images/Flat2.jpg";
import Flat3 from "../../../images/Flat3.jpg";
import Flat4 from "../../../images/Flat4.jpg";
import Flat5 from "../../../images/Flat5.jpg";
import Flat6 from "../../../images/Flat6.jpg";
import Flat7 from "../../../images/Flat7.jpg";
import Flat8 from "../../../images/Flat8.jpg";
import Flat9 from "../../../images/Flat9.jpg";
import AppointmentFeatureDetails from "../FeatureDetails/FeatureDetails";
const featureInfo = [
  {
    appointmentHeading: "Boutique Space Greenville",
    image: Flat1,
    price: "৳ 85,50,000",
    description: "",
  },

  {
    appointmentHeading: "Office Space Central Ave",
    image: Flat2,
    price: "৳ 75,50,000",
    description: "",
  },
  {
    appointmentHeading: "Luxury Villa In Rego Park",
    image: Flat3,
    price: "৳ 82,50,000",
    description: "",
  },
  {
    appointmentHeading: "Boutique Space Greenville",
    image: Flat4,
    price: "৳ 90,50,000",
    description: "",
  },
  {
    appointmentHeading: "Apartment for Sale",
    image: Flat5,
    price: "৳ 90,50,000",
    description: "",
  },
  {
    appointmentHeading: "Boutique Space Greenville",
    image: Flat6,
    price: "৳ 85,65,000",
    description: "",
  },
  {
    appointmentHeading: "Boutique Space Greenville",
    image: Flat7,
    price: "৳ 55,50,000",
    description: "",
  },
  {
    appointmentHeading: "Boutique Space Greenville",
    image: Flat8,
    price: "৳ 45,90,000",
    description: "",
  },
  {
    appointmentHeading: "Boutique Space Greenville",
    image: Flat9,
    price: "৳ 84,50,000",
    description: "",
  },
  {
    appointmentHeading: "Boutique Space Greenville",
    image: Flat1,
    price: "৳ 85,50,000",
    description: "",
  },
];
const AppointmentFeature = () => {
  const [properties, setProperties] = useState(featureInfo);
  console.log(featureInfo);
  return (
    <div className="col-md-12 mb-5 text-center">
      <h1 style={{ color: " #ff783d ", fontFamily: "Roboto" }}>Feature</h1>

      {properties.map((feature) => (
        <AppointmentFeatureDetails
          feature={feature}
        ></AppointmentFeatureDetails>
      ))}
    </div>
  );
};

export default AppointmentFeature;
