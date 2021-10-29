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
  useEffect(() => {
    fetch(`https://sixtyninethstreet.herokuapp.com/findAgent/${id}`)
    .then( res => res.json())
    .then( data => setSingleAgent(data[0]))
  }, [])
  console.log(agent);


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
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
            {/* ... sub row end... */}
            <div className="singleAgentAboutMe mb-5">
              <h2>About Me</h2>
              <p>
                {agent.agent_description}
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
