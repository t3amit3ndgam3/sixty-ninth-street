import React, { useEffect, useState } from "react";
import agentImg from "../../images/agentOne.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faLinkedin,
	faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../Home/Rabby.css";
import { Link } from "react-router-dom";
import sliderOne from "../../images/slider/sliderOne.jpg";
import sliderTwo from "../../images/slider/sliderTwo.jpg";

const AgentsPage = () => {
	const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
	const email = <FontAwesomeIcon icon={faEnvelope} />;
	const linkend = <FontAwesomeIcon icon={faLinkedin} />;
	const phone = <FontAwesomeIcon icon={faPhoneSquare} />;
	const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;

	const [agent, setAgent] = useState([]);
	console.log(agent);
	useEffect(() => {
		fetch('https://sixtyninethstreet.herokuapp.com/getAgent')
		.then(res => res.json())
		.then( data => {
		  setAgent(data)
		})
	}, [])
	return (
		<div className="mb-5">
			<div
				id="carouselExampleSlidesOnly"
				class="carousel slide"
				data-bs-ride="carousel"
				className="mb-5"
			>
				<div class="carousel-inner">
					<div class="carousel-item active sliderBlack">
						<img
							src={sliderOne}
							class="d-block w-100 AgentPagesliderImg"
							alt="..."
						/>
						<div className="AgentPageTextSlider">
							<h1>Our Trusted Agents</h1>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. .</p>
						</div>
					</div>
					<div class="carousel-item">
						<img
							src={sliderTwo}
							class="d-block w-100 AgentPagesliderImg"
							alt="..."
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					{agent&& agent.map((agt) => (
						<div className="col-12 col-sm-6 col-md-4 mt-3">
							<div className="BSRSec">
							<Link to={`/singleAgent/${agt.key}`} className="RjcardLInk">
									<div class="card RjcustomCard">
										{agt.agent_img? <img
											src={`https://sixtyninethstreet.herokuapp.com/${agt.agent_img}`}
											class="card-img-top RjagentsCardImg"
											alt="agent_image"
										/>:<img
										src={agentImg}
										class="card-img-top RjagentsCardImg img-fluid"
										alt="agent_image"
									/>}
										<div class="card-body">
											<h5 class="card-title">{agt.agent_name}</h5>
											<span className="RjAgentPageSpan">
												{agt.agent_title}
											</span>
											<p class="card-text pt-2 RjAgentPageP">
												{agt.agent_description.substring(0, 80)}...
											</p>
											<div className="RjAgentsPageIconSection">
												<div className="RjAgentsLeftIcon">
													<a target="_blank" href={agt.agent_facebook} >{facebook}</a>&nbsp;&nbsp;
													<a target="_blank" href={agt.agent_linkend}>{linkend}</a>&nbsp;&nbsp;
													<a target="_blank" href={agt.agent_twitter}>{twitter}</a>
												</div>
												<div className="RjAgentsrighttIcon">
													<a target="_blank" href={agt.agent_email}>{email}</a>&nbsp;&nbsp;
													<a target="_blank" href={agt.agent_number}>{phone}</a>
												</div>
											</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AgentsPage;
