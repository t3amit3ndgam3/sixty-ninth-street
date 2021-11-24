import React from "react";
import "../Rabby.css";
import sliderOne from "../../../images/slider/sliderOne.jpg";
import sliderTwo from "../../../images/slider/sliderTwo.jpg";

const Header = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div style={{ fontFamily: "Roboto" }} className="carousel-inner">
          <div className="carousel-item active sliderBlack">
            <img src={sliderOne} className="d-block w-100 sliderImg" alt="..." />
            <div className="carousel-caption  d-md-block">
              <div className="sliderText">
                <h3>Find your perfect property</h3>
                <h4>For your home</h4>
                <p className="mb-5">
                  We take pride in our rentals & we strive to work with our
                  landlords & tenants to create a relationship based on a solid
                  foundation of trust & cooperation.
                </p>
              </div>
              <a href="/">
                {" "}
                <button className="sliderButton">Get Started</button>
              </a>
            </div>
          </div>
          <div className="carousel-item sliderBlack">
            <img src={sliderTwo} className="d-block w-100 sliderImg" alt="..." />
            <div className="carousel-caption  d-md-block">
              <div className="sliderText">
                <h3>Buy and sell real estate properties</h3>
                <p className="mb-5">
                  Whether you’re buying, selling or renting, we can help you
                  move forward.
                </p>
              </div>
              <a href="/">
                <button className="sliderButton">Get Started</button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
