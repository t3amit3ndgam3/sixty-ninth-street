import React, { useEffect, useState } from "react";
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
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://sixtyninethstreet.herokuapp.com/api/getReviews')
    .then( res => res.json())
    .then( data => {
      setReviews(data.data);
      // const collect = data.data.length;
      // const getData = data.data;
      // const reviewsCut =  getData.slice(collect-5, collect);
      // setReviews(reviewsCut);
    })

  }, [])

  return (
    <div className="RjtestimonislsBackgoround">
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="RjtestimonialsHeading p-5">
              <h1 className="fst-italic">___ Testimonials ___</h1>
            </div>
          </div>
          <div className="col-md-12 RjtestimonialsCol12">
            <Slider {...settings}>
              {reviews &&
                reviews.map((rew) => (
                  <div className="RjuserTestimonials">
                    <div className="RjtestimonialsBody shadow p-3">
                      <div className="Rjtestimonialsbody fst-italic">
                        <p className="RjtestimonialsPTest">
                          “{rew.user_reviews}”
                        </p>
                        <h6>– {rew.user_name}</h6>
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
