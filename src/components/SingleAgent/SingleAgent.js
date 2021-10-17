import React from "react";
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

const SingleAgent = () => {
	const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
	const email = <FontAwesomeIcon icon={faEnvelope} />;
	const linkend = <FontAwesomeIcon icon={faLinkedin} />;
	const phone = <FontAwesomeIcon icon={faPhoneSquare} />;
	const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
	const mobile = <FontAwesomeIcon icon={faMobile} />;
	const skype = <FontAwesomeIcon icon={faSkype} />;
	const instagram = <FontAwesomeIcon icon={faInstagramSquare} />;
	return (
		<div className="p_bg navSpace pb-5">
			<div className="container mt-3 ">
				<div className="row">
					<div className="col-md-8 offset-md-2 singlePageContainer p-3">
						<div className="row">
							<div className="col-md-6 mb-5">
								<div className="singleAgentImg">
									<img class="img-fluid" src={agentTwo} alt="" />
									<div className="singleAgentImgOverContent">
										<Link>{facebook}</Link>
										<Link>{linkend}</Link>
										<Link>{twitter}</Link>
										<Link>{instagram}</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="singleAgentInfoTop">
									<h2>Janet Richmond</h2>
									<div class="agent_position">selling agent</div>
									<div>
										<span className=" singlePageTopIcon ">{phone}</span>
										<span>(305) 555-4555</span>
									</div>
									<div>
										<span className="singlePageTopIcon ">{mobile}</span>
										<span>(305) 555-4555</span>
									</div>
									<div>
										<span className="singlePageTopIcon ">{email}</span>
										<span>janet@wpresidence.net</span>
									</div>
									<div>
										<span className="singlePageTopIcon ">{skype}</span>
										<span>janet.wp</span>
									</div>
									<div></div>
									<div></div>
								</div>
							</div>
						</div>
						{/* ... sub row end... */}
						<div className="singleAgentAboutMe mb-5">
							<h2>About Me</h2>
							<p>
								Janet’s knowledge, honesty, integrity, and fairness have been
								evident throughout her career. In addition, she possesses a keen
								sense of the local luxury real estate climate, allowing her to
								guide her clients in acquisitions of primary residences, second
								homes, and investment properties.
								<br />
								<br /> She understands the importance of providing a truly
								personalized service to her clients, always putting their needs
								ahead of her own and paying close attention to every aspect of
								the transaction.
								<br />
								<br /> Janet has long felt that to remain competitive in today’s
								real estate market, a broad, technologically-savvy outreach is
								imperative. She is excited about the years ahead.
							</p>
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
                                <input type="submit" class="wpresidence_button agent_submit_class " id="agent_submit" value="Send Email"/>
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
