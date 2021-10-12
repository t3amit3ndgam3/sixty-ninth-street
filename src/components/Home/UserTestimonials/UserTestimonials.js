import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Rabby.css";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nav: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const UserTestimonials = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="RjtestimonislsBackgoround">
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="RjtestimonialsHeading p-5">
              <h1 className=" fst-italic">___ Testimonials ___</h1>
            </div>
          </div>
          <div className="col-md-12 RjtestimonialsCol12">
            <Slider {...settings}>
              {array.map((arr) => (
                <div className="RjuserTestimonials">
                  <div className="RjtestimonialsBody shadow p-3">
                    <div className="Rjtestimonialsbody fst-italic">
                      <p className="RjtestimonialsPTest">
                        “In her more-than-three-decade career, Mills has racked
                        up more than $3 billion in sales, consistently ranking
                        as one of the top producers in the country.”
                      </p>
                      <h6>– Hollywood Reporter</h6>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTestimonials;
