import React, { useEffect, useState } from "react";
import "./SingleAgent.css";
import agentTwo from "../../images/agents/agentTwo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhoneSquare,
	faMobile,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faLinkedin,
	faTwitterSquare,
	faSkype,
	faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import { useParams } from "react-router";
import HireAgent from "./HireAgent";

const SingleAgent = () => {
	const { id } = useParams([]);
	console.log(id);
	const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
	const email = <FontAwesomeIcon icon={faEnvelope} />;
	const linkend = <FontAwesomeIcon icon={faLinkedin} />;
	const phone = <FontAwesomeIcon icon={faPhoneSquare} />;
	const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
	const mobile = <FontAwesomeIcon icon={faMobile} />;
	const skype = <FontAwesomeIcon icon={faSkype} />;
	const instagram = <FontAwesomeIcon icon={faInstagramSquare} />;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [agent, setSingleAgent] = useState([]);
	console.log(agent);
	useEffect(() => {
		fetch(`https://sixtyninethstreet.herokuapp.com/api/singleAgent/${id}`)
			.then((res) => res.json())
			.then((data) => setSingleAgent(data.data[0]));
	}, []);
	// console.log(agent);
	const storeAgentInfo = () => {
		const userInfo = JSON.parse(
			localStorage.getItem("userInfo" || "not found")
		);
		localStorage.setItem(
			"HireAgentInfo",
			JSON.stringify({
				agent_key: agent.key,
				agent_name: agent.agent_name,
				agent_title: agent.agent_title,
				fees: agent.fees,
				agent_image: agent.agent_image,
				agent_email: agent.agent_email,
				user_email: userInfo.user_email,
			})
		);
	};

	return (
		<div className="p_bg navSpace pb-5">
			<div className="container mt-3 ">
				<div className="row">
					<div className="col-md-8 offset-md-2 singlePageContainer p-3">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mb-5">
								<div className="singleAgentImg">
									<img class="img-fluid" src={agent.agent_image} alt="" />
									<div className="singleAgentImgOverContent">
										<Link>{facebook}</Link>
										<Link>{linkend}</Link>
										<Link>{twitter}</Link>
										<Link>{instagram}</Link>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-12 col-md-6">
								<div className="singleAgentInfoTop">
									<h2>{agent.agent_name}</h2>
									<div class="agent_position">{agent.agent_title}</div>
									<div>
										<span className=" singlePageTopIcon ">{phone}</span>
										<span>{agent.agent_number}</span>
									</div>
									{/* <div>
                    <span className="singlePageTopIcon ">{mobile}</span>
                    <span>{agent.agent_number}</span>
                  </div> */}
									<div>
										<span className="singlePageTopIcon ">{email}</span>
										<span>{agent.agent_email}</span>
									</div>
									<div>
										<span className="singlePageTopIcon ">{skype}</span>
										<span>{agent.agent_skype}</span>
									</div>
									<div></div>
								</div>
							</div>
						</div>
						{/* ... sub row end... */}
						<div className="singleAgentAboutMe">
							<div className="HireMeButton">
								<input
									type="submit"
									class="wpresidence_button agent_submit_class container"
									id=""
									data-bs-toggle="modal"
									data-bs-target="#staticBackdrop"
									value="HIRE ME"
									onClick={storeAgentInfo}
								/>
							</div>
							<div>
								<div
									class="modal fade"
									id="staticBackdrop"
									data-bs-backdrop="static"
									data-bs-keyboard="false"
									tabindex="-1"
									aria-labelledby="staticBackdropLabel"
									aria-hidden="true"
								>
									<div class="modal-dialog modal-dialog-centered">
										<div class="modal-content">
											<div class="modal-header">
												<h5 class="modal-title" id="staticBackdropLabel">
													Please Payment with Stripe
												</h5>
												<button
													type="button"
													class="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"
												></button>
											</div>
											<div class="modal-body">
												<div className="hireAgentCard ">
													<div class="card mb-3">
														<div class="row g-0">
															<div class="col-md-4">
																<img class="img-fluid" src={agent.agent_image} alt="" />
															</div>
															<div class="col-md-8">
																<div class="card-body">
																	<h5 class="card-title">{agent.agent_name}</h5>
																	<p class="card-text">
																	{agent.agent_title}
																	<br />
																	{agent.fees}
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<HireAgent />
											</div>
											<div class="modal-footer">
												<button
													type="button"
													class="btn btn-secondary"
													data-bs-dismiss="modal"
												>
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<h2>About Me</h2>
							<p>{agent.agent_description}</p>
						</div>
						<div className="singleAgentContactForm">
							<h2>Contact Me</h2>
							<form className="row singleAgentForm">
								<div className="col-sm-12 col-md-4">
									<div class="mb-3">
										<input
											type="text"
											class="form-control"
											placeholder="Your Name"
										/>
									</div>
								</div>
								<div className="col-sm-12  col-md-4">
									<div class="mb-3">
										<input
											type="text"
											class="form-control"
											placeholder="Your Name"
										/>
									</div>
								</div>
								<div className="col-sm-12  col-md-4">
									<div class="mb-3">
										<input
											type="text"
											class="form-control"
											placeholder="Your Name"
										/>
									</div>
								</div>
								<div className="col-sm-12  col-md-12">
									<div class="mb-3">
										<textarea
											type="text"
											class="form-control"
											placeholder="Your Name"
										/>
									</div>
								</div>
								<div className="col-md-12 mb-3">
									<input
										type="submit"
										class="wpresidence_button agent_submit_class "
										id="agent_submit"
										value="Send Email"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleAgent;
