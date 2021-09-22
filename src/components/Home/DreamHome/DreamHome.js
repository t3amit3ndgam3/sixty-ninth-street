import React, { useState } from "react";
import "../Home.css";
import dream from "../../../images/DreamHome/dream.jpg";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const DreamHome = () => {
	const [numberVisible, setNumberVisible] = useState(true)
	const home = <FontAwesomeIcon icon={faHome} />;
	const user = <FontAwesomeIcon icon={faUser} />;
	const shield = <FontAwesomeIcon icon={faShieldAlt} />;

	return (
		<div className="mb-5">
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-12">
						<div className="dreamHomeHeader">
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
					<div className="col-sm-12 col-md-5 ">
						<div className="dreamRightContent ps-md-5">
							<div className="quality">
								<div className="dreamIconMain">
									<p className="dreamIcon">{home}</p>
								</div>
								<div className="dreamText">
									<h5>QUALITY PROPERTIES</h5>
									<p>orem ipsum dolor sit amet consectetur adipisicing</p>
								</div>
							</div>
							<div className="quality">
								<div className="dreamIconMain">
									<p className="dreamIcon">{user}</p>
								</div>
								<div className="dreamText">
									<h5>QUALITY PROPERTIES</h5>
									<p>orem ipsum dolor sit amet consectetur adipisicing</p>
								</div>
							</div>
							<div className="quality">
								<div className="dreamIconMain">
									<p className="dreamIcon">{shield}</p>
								</div>
								<div className="dreamText">
									<h5>QUALITY PROPERTIES</h5>
									<p>orem ipsum dolor sit amet consectetur adipisicing</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* .............................. */}
				<div className="mt-2 row">
					<div className="col-6 col-sm-6 col-md-3 dreamCount">
						<span className="DreamNumber">
							<CountUp end={2917} duration={1}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span onChange={setNumberVisible(false)} ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</span>
						<br />
						<span className="NumberText"># of Buy Properties</span>
					</div>
					<div className="col-6 col-sm-6 col-md-3 dreamCount">
						<span className="DreamNumber">
							<CountUp end={3867} duration={2}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</span>
						<br />
						<span className="NumberText"># of Sell Properties</span>
					</div>
					<div className="col-6 col-sm-6 col-md-3 dreamCount">
						<span className="DreamNumber">
							<CountUp end={38976} duration={2}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</span>
						<br />
						<span className="NumberText"># of All Properties</span>
					</div>
					<div className="col-6 col-sm-6 col-md-3 dreamCount">
						<span className="DreamNumber">
							<CountUp  end={1149} redraw={true} duration={2}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</span>
						<br />
						<span className="NumberText"># of Agents</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DreamHome;