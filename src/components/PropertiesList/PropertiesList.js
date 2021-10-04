import React, { useState } from "react";
import "./PropertiesList.css";
import { Range } from "react-range";
import imgOne from "../../images/PropertyList/pone.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faBath,
	faObjectGroup,
	faShareAlt,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import aliza from "../../images/aliza.png";

const PropertiesList = () => {
	const [range, setRange] = useState([0]);
	const list =[1,2,3,4,5];
	const bed = <FontAwesomeIcon icon={faBed} />;
	const bath = <FontAwesomeIcon icon={faBath} />;
	const love = <FontAwesomeIcon icon={faHeart} />;
	const objectGroup = <FontAwesomeIcon icon={faObjectGroup} />;
	const share = <FontAwesomeIcon icon={faShareAlt} />;
	return (
		<>
			<div className="container navSpace">
				<div className="row">
					<div className="col-mmd-12">
						<div className="RjpropertiseHEading">
							<h1>Properties List –</h1>
						</div>
					</div>
					<div className="col-12 col-md-4">
						<div className="propertyColFour">
							<div className="propertiesForm types">
								<select class="form-select" aria-label="Default select example">
									<option selected>Types</option>
									<option value="1">TypeOne</option>
									<option value="2">TypeTwo</option>
									<option value="3">TypeThree</option>
								</select>
							</div>
							<div className="propertiesForm types">
								<select class="form-select" aria-label="Default select example">
									<option selected>Categories</option>
									<option value="1">CatOne</option>
									<option value="2">CatTwo</option>
									<option value="3">CatThree</option>
								</select>
							</div>
							<div className="propertiesForm types">
								<select class="form-select" aria-label="Default select example">
									<option selected>States</option>
									<option value="1">StateOne</option>
									<option value="2">StatesTwo</option>
									<option value="3">StatesThree</option>
								</select>
							</div>

							<div className="propertiesForm typesCount mt-5">
								<Range
									step={20}
									min={0}
									className="propertyRange"
									max={1000000}
									values={range}
									onChange={(values) => setRange(values)}
									renderTrack={({ props, children }) => (
										<div
											{...props}
											style={{
												...props.style,
												height: "6px",
												width: "90%",
												marginLeft: "20px",
												backgroundColor: "#ccc",
											}}
										>
											{children}
										</div>
									)}
									renderThumb={({ props }) => (
										<div
											{...props}
											style={{
												...props.style,
												height: "20px",
												width: "20px",
												backgroundColor: "#999",
											}}
										/>
									)}
								/>

								<p className="propertiesRangeCount">$0 &nbsp;&nbsp; - to - &nbsp;&nbsp; ${range}</p>
							</div>
						</div>
					</div>
					<div className="col-12  col-md-8 ">
						{list.map(ls=>(
							<Link to="" className="RjPropertiesLInk bg-default">
							<div class="card mb-3 RjPropertiseCard">
								<div class="row g-0">
									<div class="col-sm-12 col-md-4 RjPropertiesImg">
										<img
											src={imgOne}
											class="img-fluid rounded-start"
											alt="..."
										/>
									</div>
									<div class="col-sm-12 col-md-8">
										<div class="card-body">
											<h5 class="card-title">Restaurant and Bar Hudson</h5>
											<h6 class="card-title">$15000.00</h6>
											<p class="card-title">
												Downtown Frederick hot spot. Top location for local ...
											</p>
											<span>{bed} 2</span>&nbsp;&nbsp;<span>{bath} 2</span>
											&nbsp;&nbsp;
											<span>
												{objectGroup} m<sup>2</sup>{" "}
											</span>
											<div className="RjPropertiseUserSection">
												<div className="RjProUser">
													<img src={aliza} alt="" />
													&nbsp;&nbsp;
													<span>Aliza</span>
												</div>
												<div className="RjPropertiesListIcon">
													<Link to="">{love}</Link>
													&nbsp;&nbsp;&nbsp;&nbsp;
													<Link to="">{share}</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
						))}

						
					</div>
				</div>
			</div>
		</>
	);
};

export default PropertiesList;
