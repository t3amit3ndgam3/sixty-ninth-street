import React, { useState, useEffect } from "react";
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
	const bed = <FontAwesomeIcon icon={faBed} />;
	const bath = <FontAwesomeIcon icon={faBath} />;
	const love = <FontAwesomeIcon icon={faHeart} />;
	const objectGroup = <FontAwesomeIcon icon={faObjectGroup} />;
	const share = <FontAwesomeIcon icon={faShareAlt} />;
	const [propertiesAll, setPropertiesAll] = useState([]);
	const [properties, setProperties] = useState([]);
	const [loadData, setLoadData] = useState(5);
	const [btnFlag, setBtnFlag] = useState(true);
	
	useEffect(() => {
		fetch("https://sixtyninethstreet.herokuapp.com/allProperty")
			.then((res) => res.json())
			.then((data) => {
				setPropertiesAll(data);
				
			});
	}, []);
	useEffect(() => {
		const cutData =  propertiesAll.slice(0, loadData);
		setProperties(cutData);
		// console.log(properties,loadData);
	}, [propertiesAll])

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	const handleLoadMore =() =>{
		const cutData =  propertiesAll.slice(0, loadData+loadData);
		setProperties(cutData)
		if(loadData+loadData >= propertiesAll.length){
			setBtnFlag(false)
		}
		setLoadData(loadData+2);
	}
	return (
		<>
			<div className="container navSpace mb-5">
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

								<p className="propertiesRangeCount">
									$0 &nbsp;&nbsp; - to - &nbsp;&nbsp; {range}
								</p>
							</div>
						</div>
					</div>
					<div className="col-12  col-md-8 ">
						{properties.map((pro) => (
							<Link
								to={`/spp/${pro.key}`}
								className="RjPropertiesLInk bg-default"
							>
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
												<h5 class="card-title">{pro.property_name}</h5>
												<h6 class="card-title">$ {pro.price}</h6>
												<p>{pro.property_description.substring(0, 80)}...</p>
												<span>
													{bed} {pro.bedroom}
												</span>
												&nbsp;&nbsp;
												<span>
													{bath} {pro.bathroom}
												</span>
												&nbsp;&nbsp;
												<span>
													{objectGroup} s{pro.property_size} ft<sup>2</sup>{" "}
												</span>
												{/* <div className="RjPropertiseUserSection">
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
												</div> */}
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}

						{btnFlag && <button
							class="wpresidence_button  agent_submit_class mb-3 col-md-4 offset-md-4"
							id="agent_submit"
							onClick={handleLoadMore}
						>
							Load More
						</button>}
					</div>
				</div>
			</div>
		</>
	);
};

export default PropertiesList;
