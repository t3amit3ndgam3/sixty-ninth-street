import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agent from "../../../images/agent1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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

const AgentList = () => {
	const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
	const email = <FontAwesomeIcon icon={faEnvelope} />;
	const linkend = <FontAwesomeIcon icon={faLinkedin} />;
	return (
		<div className="container pb-5">
			<div className="row">
				<div className="col-md-12">
					<div className="dreamHomeHeader">
						<h1>OUR AGENTS</h1>
						<p>
							Get started by choosing from one of our pre-built page templates
							to showcase your properties
						</p>
					</div>
				</div>
				<Slider {...settings}>
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
					<div class="card RJAgentCARD">
						<div className="RjAgentCardImg">
							<a href="">
								<img src={agent} class="card-img-top" alt="..." />
							</a>
							<div className="RjAgentIconOver">
								<a href="">
									{" "}
									<span className="RjAgenticon AgentFacebbok">{facebook}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentEmail">{email}</span>
								</a>
								<a href="">
									<span className="RjAgenticon AgentLinkend">{linkend}</span>
								</a>
							</div>
						</div>
						<div class="card-body">
							<p class="card-text">
								<span className="fs-4 fw-bold">Golam Rabby</span> <br /> Real
								State Agent
							</p>
						</div>
					</div>
					{/* ................................. */}
				</Slider>
			</div>
		</div>
	);
};

export default AgentList;
