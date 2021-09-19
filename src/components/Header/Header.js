import React from "react";
import "./Header.css";
import sliderOne from '../../images/sliderOne.jpg'
import sliderTwo from '../../images/sliderTwo.jpg'

const Header = () => {
	return (
		<div>
			<div
				id="carouselExampleCaptions"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						class="active"
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
				<div class="carousel-inner">
					<div class="carousel-item active sliderBlack">
						<img src={sliderOne} class="d-block w-100 sliderImg" alt="..." />
						<div class="carousel-caption  d-md-block">
							<h3>Find your perfect property</h3>
							<h4>For your home</h4>
							<p className="mb-5">
								Some representative placeholder content for the first slide.
							</p>
							<a href="" className="sliderButton">Get Started</a>
						</div>
					</div>
					<div class="carousel-item sliderBlack">
						<img src={sliderTwo} class="d-block w-100 sliderImg" alt="..." />
						<div class="carousel-caption  d-md-block">
							<h3>Buy and Sell property here</h3>
							<p className="mb-5">
								Some representative placeholder content for the second slide.
							</p>
							<a href="" className="sliderButton">Get Started</a>
						</div>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
