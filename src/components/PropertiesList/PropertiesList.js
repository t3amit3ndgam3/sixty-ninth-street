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
import PropertyFilters from "./PropertyFilters";

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
		fetch("https://sixtyninethstreet.herokuapp.com/api/allProperty")
			.then((res) => res.json())
			.then((data) => {
				setPropertiesAll(data.data);
			});
	}, []);
	useEffect(() => {
		window.scrollTo(0, 0);
		const cutData = propertiesAll.slice(0, loadData);
		setProperties(cutData);
	}, [propertiesAll]);

	const handleLoadMore = () => {
		const cutData = propertiesAll.slice(0, loadData + loadData);
		setProperties(cutData);
		if (loadData + loadData >= propertiesAll.length) {
			setBtnFlag(false);
		}
		setLoadData(loadData + 2);
	};


  const [textData, setTextData] = useState({
    property_type:"",
    property_for:"",
    city:"",
  });
  const handleTextData = (e) => {
    const newText = { ...textData };
    newText[e.target.name] = e.target.value;
    setTextData(newText);

    fetch("https://sixtyninethstreet.herokuapp.com/api/findMultipleProperties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(textData),
    })
      .then((res) => res.json())
      .then((data) => {
        setPropertiesAll(data.data)
      });

  };
  console.log(textData);

	return (
		<>
			<div className="container navSpace mb-5">
				<div className="row">
					{/* Page Heading */}
					<div className="col-md-12">
						<div className="RjpropertiseHEading">
							<h1>Properties List –</h1>
						</div>
					</div>
					{/* Left Side Filters Start */}
					<div className="col-12 col-md-4">
						<div className="propertyColFour">
							<select onChange={handleTextData} name="property_type" class="TypeSelector">
								<option value="flat">Select Type</option>
								<option value="flat">Apartment</option>
								<option value="duplex">Duplex Home</option>
								<option value="showroom">Showroom</option>
								<option value="office">Office Space</option>
								<option value="shop">Shop</option>
							</select>
							<select
								onChange={handleTextData}
								name="property_for"
								class="TypeSelector"
							>
								<option value="sell" >Sell / Rent</option>
								<option value="sell" >Sell</option>
								<option value="rent" >Rent</option>
							</select>
							<select onChange={handleTextData} name="city" class="TypeSelector">
                 <option value="dhaka">Region</option>
								<option value="dhaka">Dhaka</option>
								<option value="chittagong">Chittagong</option>
								<option value="khulna">Khulna</option>
								<option value="rajshahi">Rajshahi</option>
								<option value="coxbazar">Cox's Bazar</option>
								<option value="sylhet">Sylhet</option>
								<option value="gazipur">Gazipur</option>
								<option value="mymensingh">Mymensingh</option>
								<option value="rangpur">Rangpur</option>
							</select>
							{/* Range */}
							{/* <div className="propertiesForm typesCount">
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
							</div> */}
						</div>
						{/* Latest Listing Start */}
						<div className="LatestListing mb-5">
							<p className="fs-4 fw-bold pb-3">Latest Listing</p>
							{properties.map((property) => {
								return (
									// Cards
									<>
										<div className="LatestListingCards">
											{/* Image */}
											<img
												src={property.image_one}
												alt=""
												className="LatestListingImage"
											/>
											{/* Details */}
											<div>
												<p className="LatestListingNames">
													{property.property_name}
												</p>
												<p className="fw-bold fs-5 text-success mb-1">
													$ {property.price}
												</p>
												{/* Icons */}
												<p className="LatestListingIcons mb-1">
													<span>
														{bed}&nbsp;
														{property.bedroom}
													</span>
													&nbsp; &nbsp; &nbsp;
													<span>
														{bath}&nbsp;
														{property.bathroom}
													</span>
													&nbsp; &nbsp; &nbsp;
													<span>
														{objectGroup}&nbsp;
														{property.property_size}ft<sup>2</sup>
													</span>
												</p>
											</div>
										</div>
										<hr />
									</>
								);
							})}
						</div>
						{/* Latest Listing Ends */}
					</div>
					{/* Left Side Filters Ends */}

					{/* Properties Lists Start */}
					<div className="col-12 col-md-8 ">
						{properties.map((pro) => (
							<Link to={`/spp/${pro._id}`} className="RjPropertiesLInk">
								<div class="card mb-3 RjPropertiseCard">
									<div class="row g-0">
										<div class="col-md-4 RjPropertiesImg">
											<img
												src={pro.image_one}
												class="img-fluid rounded-start"
												alt="..."
											/>
										</div>
										<div class="col-sm-12 col-md-8 pt-2">
											<div class="card-body">
												<h5 class="fw-bold">{pro.property_name}</h5>
												<h6 class="fw-bold mb-2 text-info">$ {pro.price}</h6>
												<p className="mb-2">
													<span>
														{bed} {pro.bedroom}
													</span>
													&nbsp; &nbsp; &nbsp; &nbsp;
													<span>
														{bath} {pro.bathroom}
													</span>
													&nbsp; &nbsp; &nbsp; &nbsp;
													<span>
														{objectGroup}
														{pro.property_size} ft<sup>2</sup>{" "}
													</span>
												</p>
												<p>{pro.property_description.substring(0, 60)}...</p>

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
						{/* Load More Button */}
						{btnFlag && (
							<button
								class="wpresidence_button  agent_submit_class mb-3 col-md-4 offset-md-4"
								id="agent_submit"
								onClick={handleLoadMore}
							>
								Load More
							</button>
						)}
					</div>
					{/* Properties Lists Start */}
				</div>
			</div>
		</>
	);
};

export default PropertiesList;
