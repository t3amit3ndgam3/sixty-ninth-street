import React, { useState } from "react";
import "../UserReviews/UserReviews.css";

const AddAgents = () => {
	const [agentInfo, setAgentInfo] = useState({});
	const [AgentImg, setAgentImg] = useState();
	console.log(agentInfo);

	const handleAgentForm = (e) => {
		const data = { ...agentInfo };
		data[e.target.name] = e.target.value;
		setAgentInfo(data);
	};

	const handleAgentSubmit = (e) => {

        e.preventDefault();

		const formData =new FormData();
		formData.append("agent_name", agentInfo.agent_name);
		formData.append("agent_title", agentInfo.agent_title);
		formData.append("agent_number", agentInfo.agent_number);
		formData.append("agent_email", agentInfo.agent_email);
		formData.append("agent_facebook", agentInfo.agent_facebook);
		formData.append("agent_linkend", agentInfo.agent_linkend);
		formData.append("agent_twitter", agentInfo.agent_twitter);
		formData.append("agent_instagram", agentInfo.agent_instagram);
		formData.append("agent_skype", agentInfo.agent_skype);
		formData.append("agent_image", AgentImg);

		fetch("http://localhost:5000/addAgent", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				window.alert("Data Inserted");
			})
			.catch((error) => console.error(error));
    
	};
	return (
		<div className="navSpace p_bg ">
			<div className="container mt-5">
				<form onSubmit={handleAgentSubmit} className=" row userReviewsSection">
					<div className="col-md-12">
						<h1>Add Trusted Agents</h1>
					</div>
					<div className="col-md-6 p-5">
						<div className="">
							<div class="mb-3">
								<label for="agentName" class="form-label">
									Agent Name
								</label>
								<input
									type="text"
									class="form-control"
									id="agentName"
									name="agent_name"
									onBlur={handleAgentForm}
									required
								/>
							</div>
							<div class="mb-3">
								<label for="agentTitle" class="form-label">
									Agent Title
								</label>
								<input
									type="text"
									class="form-control"
									id="agentTitle"
									name="agent_title"
									onBlur={handleAgentForm}
									required
								/>
							</div>
							<div class="mb-3">
								<label for="agentNumber" class="form-label">
									Agent Number
								</label>
								<input
									type="number"
									class="form-control"
									id="agentNumber"
									name="agent_number"
									onBlur={handleAgentForm}
									required
								/>
							</div>
							<div class="mb-3">
								<label for="agentEmail" class="form-label">
									Agent Email
								</label>
								<input
									type="email"
									class="form-control"
									id="agentEmail"
									name="agent_email"
									onBlur={handleAgentForm}
									required
								/>
							</div>
							<div class="mb-3">
								<label for="agentFacebook" class="form-label">
									Agent Facebook Link
								</label>
								<input
									type="text"
									class="form-control"
									id="agentFacebook"
									name="agent_facebook"
									onBlur={handleAgentForm}
									required
								/>
							</div>
						</div>
					</div>
					<div className="col-md-6 p-5">
						<div className="">
							<div class="mb-3">
								<label for="agentLinkend" class="form-label">
									Agent Linkend Link
								</label>
								<input
									type="text"
									class="form-control"
									id="agentLinkend"
									name="agent_linkend"
									onBlur={handleAgentForm}
									required
								/>
							</div>
							<div class="mb-3">
								<label for="agentTwitter" class="form-label">
									Agent Twitter Link
								</label>
								<input
									type="text"
									class="form-control"
									id="agentTwitter"
									name="agent_twitter"
									onBlur={handleAgentForm}
									required
								/>
							</div>
							<div class="mb-3">
								<label for="agentInstagram" class="form-label">
									Agent Instagram Link
								</label>
								<input
									type="text"
									class="form-control"
									id="agentInstagram"
									name="agent_instagram"
									onBlur={handleAgentForm}
									required
								/>
							</div>
							<div class="mb-3">
								<label for="agentSkype" class="form-label">
									Agent Skype Id
								</label>
								<input
									type="text"
									class="form-control"
									id="agentSkype"
									name="agent_skype"
									onBlur={handleAgentForm}
									required
								/>
							</div>
							<div class="mb-3">
								<label for="agentImage" class="form-label">
									Agent Formal Image
								</label>
								<input
									type="file"
									className="input_field"
									id="agentSkype"
									name="agent_image"
									onChange={(e) => {
										setAgentImg(e.target.files[0]);
									}}
									required
								/>
							</div>
						</div>
					</div>
					<div className="col-md-6 offset-md-3">
						<div class="mb-3">
							<input
								type="submit"
								class="wpresidence_button agent_submit_class container"
								id=""
								value="Add Agents"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddAgents;
