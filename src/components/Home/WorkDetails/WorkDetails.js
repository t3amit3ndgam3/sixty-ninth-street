import React from "react";
import "../Home.css";
const WorkDetails = ({ Work }) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{ height: "70px" }} src={Work.image} alt="" />
      <h4
        style={{ color: " #ff783d ", fontFamily: "Roboto" }}
        className="mt-4 mb-4"
      >
        {Work.name}
      </h4>
      <p className="text-secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
        perferendis.
      </p>
    </div>
  );
};

export default WorkDetails;
