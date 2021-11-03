import React, { useState } from "react";
import "../Rabby.css";
import dream from "../../../images/DreamHome/dream_home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const DreamHome = () => {
  const [focus, setFocus] = useState(false);
  const home = <FontAwesomeIcon icon={faHome} />;
  const user = <FontAwesomeIcon icon={faUser} />;
  const shield = <FontAwesomeIcon icon={faShieldAlt} />;

  return (
    <div className="RjDreamHomeTopHEader mb-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="dreamHomeHeader section_headers">
              <h1>WE BRING DREAM HOMES TO REALITY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                enim pariatur similique <br /> debitis vel nisi qui
                reprehenderit totam? Quod maiores.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-7 mb-5">
            <div className="imgDiv">
              <img src={dream} alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="dreamRightContent ps-md-5">
              <div className="quality">
                <div className="dreamIconMain">
                  <p className="dreamIcon">{home}</p>
                </div>
                <div className="dreamText">
                  <h5>QUALITY PROPERTIES</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
              <div className="quality">
                <div className="dreamIconMain">
                  <p className="dreamIcon">{user}</p>
                </div>
                <div className="dreamText">
                  <h5>TOP RATED AGENTS</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
              <div className="quality">
                <div className="dreamIconMain">
                  <p className="dreamIcon">{shield}</p>
                </div>
                <div className="dreamText">
                  <h5>EASY AND SAFE</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .............................. */}
        <div className="mt-2 row">
          <div className="col-6 col-sm-6 col-md-3 dreamCount">
            <CountUp
              start={focus ? 0 : null}
              end={2986}
              duration={1}
              redraw={true}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="DreamNumber" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="NumberText"># of Buy Properties</span>
          </div>
          <div className="col-6 col-sm-6 col-md-3 dreamCount">
            <CountUp
              start={focus ? 0 : null}
              end={2768}
              duration={1}
              redraw={true}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="DreamNumber" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="NumberText"># of Sell Properties</span>
          </div>
          <div className="col-6 col-sm-6 col-md-3 dreamCount">
            <CountUp
              start={focus ? 0 : null}
              end={38469}
              duration={1}
              redraw={true}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="DreamNumber" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="NumberText"># of All Properties</span>
          </div>
          <div className="col-6 col-sm-6 col-md-3 dreamCount">
            <CountUp
              start={focus ? 0 : null}
              end={1139}
              duration={1}
              redraw={true}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="DreamNumber" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="NumberText"># of Agents</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamHome;
