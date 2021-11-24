import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../Home/Rabby.css";
import { Link } from "react-router-dom";
import agentbd1 from "../../images/agents/agent-bg1.jpg";

const AgentsPage = () => {
  const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  const linkend = <FontAwesomeIcon icon={faLinkedin} />;
  const phone = <FontAwesomeIcon icon={faPhoneSquare} />;
  const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;

  const [agent, setAgent] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://sixtyninethstreet.herokuapp.com/api/getAgent")
      .then((res) => res.json())
      .then((data) => setAgent(data.data));
  }, []);

  return (
    <div className="mb-5 navSpace">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active sliderBlack">
            <img
              src={agentbd1}
              className="d-block w-100 AgentPagesliderImg"
              alt="..."
            />
            <div className="AgentPageTextSlider">
              <h1>Our Trusted Agents</h1>
              <p>Let us guide you home</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={agentbd1}
              className="d-block w-100 AgentPagesliderImg"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {agent.map((agt) => (
            <div key={agt._id} className="col-12 col-sm-6 col-md-4 mt-3">
              <div className="BSRSec">
                <div className="card RjcustomCard">
                  <Link to={`/singleAgent/${agt._id}`} className="RjcardLInk">
                    <img
                      src={agt.agent_image}
                      className="card-img-top RjagentsCardImg"
                      alt="agent_image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{agt.agent_name}</h5>
                      <span className="RjAgentPageSpan">{agt.agent_title}</span>
                      <p className="card-text pt-2 RjAgentPageP">
                        {agt.agent_description.substring(0, 50)} .......
                      </p>
                    </div>
                  </Link>
                  <div className="RjAgentsPageIconSection">
                    <div className="RjAgentsLeftIcon">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {facebook}
                      </a>
                      &nbsp;&nbsp;
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkend}
                      </a>
                      &nbsp;&nbsp;
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {twitter}
                      </a>
                    </div>
                    <div className="RjAgentsrighttIcon">
                      <a
                        href="https://www.google.com/intl/bn/gmail/about/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {email}
                      </a>
                      &nbsp;&nbsp;
                      <a
                        href="tel:{agt.agent_number}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;
