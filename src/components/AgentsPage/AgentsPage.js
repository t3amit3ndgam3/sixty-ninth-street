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
        class="carousel slide"
        data-bs-ride="carousel"
        className="mb-5"
      >
        <div class="carousel-inner">
          <div class="carousel-item active sliderBlack">
            <img
              src={agentbd1}
              class="d-block w-100 AgentPagesliderImg"
              alt="..."
            />
            <div className="AgentPageTextSlider">
              <h1>Our Trusted Agents</h1>
              <p>Let us guide you home</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={agentbd1}
              class="d-block w-100 AgentPagesliderImg"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {agent.map((agt) => (
            <div className="col-12 col-sm-6 col-md-4 mt-3">
              <div className="BSRSec">
                <Link to={`/singleAgent/${agt._id}`} className="RjcardLInk">
                  <div class="card RjcustomCard">
                    <img
                      src={agt.agent_image}
                      class="card-img-top RjagentsCardImg"
                      alt="agent_image"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{agt.agent_name}</h5>
                      <span className="RjAgentPageSpan">{agt.agent_title}</span>
                      <p class="card-text pt-2 RjAgentPageP">
                        {agt.agent_description.substring(0, 50)} .......
                      </p>
                      <div className="RjAgentsPageIconSection">
                        <div className="RjAgentsLeftIcon">
                          <Link to="">{facebook}</Link>&nbsp;&nbsp;
                          <Link to="">{linkend}</Link>&nbsp;&nbsp;
                          <Link to="">{twitter}</Link>
                        </div>
                        <div className="RjAgentsrighttIcon">
                          <Link to="">{email}</Link>&nbsp;&nbsp;
                          <Link to="">{phone}</Link>
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
