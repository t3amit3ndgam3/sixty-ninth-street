import React from "react";

const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial;

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-footer d-flex  align-items-center">
          <img className="mx-2" src={img} alt="" width="60" />
          <div>
            <h6 style={{ color: "#ff783d" }}>{name}</h6>
            <p className="m-0" style={{ color: "#a2a2a2" }}>
              {from}
            </p>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text" style={{ color: "#a2a2a2" }}>
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
