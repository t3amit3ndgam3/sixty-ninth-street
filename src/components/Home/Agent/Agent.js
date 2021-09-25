import React from "react";

const Agent = ({ data }) => {
  return (
    <>
      <div className="col">
        <img className="py-2" src={data.img} alt="agents img" />
        <h5>{data.name}</h5>
        <small>{data.description}</small>
      </div>
    </>
  );
};

export default Agent;
