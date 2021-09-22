import React from "react";
import "./Testimonials.css";
import Testimonial from "../Testimonial/Testimonial";
import ALLISON from "../../../images/ALLISON.png";
import NESTOR from "../../../images/NESTOR.png";
import Ema from "../../../images/ema.png";
import Wilson from "../../../images/wilson.png";

const Testimonials = () => {
  const testimonialData = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "ALLISON HOLMES",
      from: "Customer",
      img: ALLISON,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "NESTOR HELSIN",
      from: "Customer",
      img: NESTOR,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "EMA GOMEZ",
      from: "Customer",
      img: Ema,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "JAMES PHELPS",
      from: "Customer",
      img: Wilson,
    },
  ];
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h1
            className="text-uppercase text-center"
            style={{ color: "#ff783d", fontFamily: "Roboto" }}
          >
            Testimonial
          </h1>
        </div>
        <div className="d-flex justify-content-center card-deck">
          <div className="w-120 row mt-5 pt-5">
            {testimonialData.map((testimonial) => (
              <Testimonial testimonial={testimonial}></Testimonial>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
