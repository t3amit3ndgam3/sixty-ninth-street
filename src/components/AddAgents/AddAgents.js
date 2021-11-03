import React, { useState } from "react";
import "./AddAgents.css";

const AddAgents = () => {
  const [alertMessage, setAlert] = useState("");
  const [agentInfo, setAgentInfo] = useState({});
  const [AgentImg, setAgentImg] = useState({});
  const [agent_image, setAgentImgUrl] = useState();
  console.log(agentInfo);
  const handleAgentForm = (e) => {
    const data = { ...agentInfo };
    data[e.target.name] = e.target.value;
    setAgentInfo(data);
  };
  const handleFileData = (e) => {
    const newFile = { ...AgentImg };
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "cubeit");
    formData.append("cloud_name", "cubeitstoreimage");

    fetch("https://api.cloudinary.com/v1_1/cubeitstoreimage/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        newFile[e.target.name] = data.url;
        setAgentImg(newFile);
        console.log("image uploaded");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAgentSubmit = (e) => {
    e.preventDefault();

    const agentData = { ...agentInfo, ...AgentImg };
    // console.log(agentData);
    if (AgentImg) {
      fetch("https://sixtyninethstreet.herokuapp.com/api/addAgent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(agentData),
      })
        .then((res) => res.json())
        .then((data) => {
          window.alert("Agent Added done");
          setAlert(data.message);
        });
    } else {
      window.alert("image not found yest");
    }
    e.target.reset();
  };

  setTimeout(function () {
    setAlert("");
  }, 5000);

  return (
    <div className="me-5">
      <div className="container ">
        <form onSubmit={handleAgentSubmit} className="row add_agent_wrapper">
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
                  // required
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
                  // required
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
                  // required
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
                  // required
                />
              </div>
              <div class="mb-2">
                <label for="experienceYear" class="form-label">
                  Year of experience
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="experienceYear"
                  name="experience"
                  onBlur={handleAgentForm}
                  // required
                />
              </div>
              <div class="mb-3">
                <label for="AgentFee" class="form-label">
                  Agent Fees
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="AgentFee"
                  name="fees"
                  onBlur={handleAgentForm}
                  // required
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 p-5">
            <div className="">
              <div class="mb-3 mt-2">
                <label for="agentImage" class="form-label">
                  Agent Formal Image
                </label>
                <input
                  type="file"
                  className="input_field"
                  id="agentImage"
                  name="agent_image"
                  onChange={handleFileData}
                  required
                />
              </div>
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
                  // required
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
                  // required
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
                  // required
                />
              </div>
              <div class="mb-4">
                <label for="agentSkype" class="form-label">
                  Agent Skype Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="agentSkype"
                  name="agent_skype"
                  onBlur={handleAgentForm}
                  // required/
                />
              </div>
              <div class="mb-1 mt-3">
                <label for="Descriptioninput" class="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  class="form-control p-4"
                  id="Descriptioninput"
                  name="agent_description"
                  onBlur={handleAgentForm}
                  // required
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
          {alertMessage && (
            <div className="col-md-11 p-1 mt-2">
              <p className="shadow text-center bg-info">{alertMessage}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddAgents;
