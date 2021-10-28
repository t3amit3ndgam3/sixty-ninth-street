// import React, { useState } from "react";
// import "../Home/Unmoy.css";

// const AddProperty = () => {
// 	const [textData, setTextData] = useState({});
// 	const [fileData, setFileData] = useState({});
// 	const [imageUrl, setImageUrl] = useState([]);
// 	const [urlFlag, setUrlFlag] = useState(false);
// 	const [message, setMessage] = useState("");
// 	console.log("flag change", urlFlag);
// 	console.log("this is image url", imageUrl);
// 	const handleTextData = (e) => {
// 		const newText = { ...textData };
// 		newText[e.target.name] = e.target.value;
// 		setTextData(newText);
// 	};
// 	const handleFileData = (e) => {
// 		const newFile = { ...fileData };
// 		newFile[e.target.name] = e.target.files[0];
// 		setFileData(newFile);
// 	};

// 	const imageStoreServer = async () => {
//     const totalData = { ...textData };
// 		totalData.image_one = imageUrl[0];
// 		totalData.image_two = imageUrl[1];
// 		totalData.image_three = imageUrl[2];
// 		console.log("total Data", totalData);
// 		fetch("http://localhost:5000/api/addProperty", {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify(totalData),
// 		})
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setMessage("Update Successful");
// 				console.log(data);
// 			})
//       .then(err=>{
//         setMessage("Please try again .. something is wrong");
//       })

// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		await imageStoreServer();

//     const totalFile = Object.values(fileData);
// 		totalFile.map((fp, index) => {
// 			const formData = new FormData();
// 			formData.append("file", fp);
// 			formData.append("upload_preset", "cubeit");
// 			formData.append("cloud_name", "cubeitstoreimage");

// 			fetch("https://api.cloudinary.com/v1_1/cubeitstoreimage/image/upload", {
// 				method: "POST",
// 				body: formData,
// 			})
// 				.then((res) => res.json())
// 				.then((data) => {
// 					imageUrl.push(data.url);
// 					setImageUrl(imageUrl);
// 					setMessage("Please wait its need some time for validation");
// 					if (index == 2) {
// 						setUrlFlag(true);
// 					}
// 				})
// 				.catch((error) => {
// 					console.error(error);
// 				});
// 		});

// 		// e.target.reset();
// 	};

// 	return (
// 		<div className="addProperty_section navSpace mb-5">
// 			<div className="addProperty_wrapper">
// 				<h1>Add Property</h1>

// 				<div>
// 					<form onSubmit={handleSubmit}>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Property for:</h6>
// 							</div>
// 							<div className="ckeckbox_wrapper">
// 								<div className="input_wrapper">
// 									<input
// 										class="form-check-input"
// 										type="radio"
// 										name="property_for"
// 										value="sell"
// 										id="PropertyFor"
// 										// required
// 										onBlur={handleTextData}
// 									/>
// 									<label class="form-check-label" for="PropertyFor">
// 										Sell
// 									</label>
// 								</div>
// 								<div className="input_wrapper">
// 									<input
// 										class="form-check-input"
// 										type="radio"
// 										name="property_for"
// 										value="rent"
// 										id="flexRadioDefault222"
// 										// required
// 										onBlur={handleTextData}
// 									/>
// 									<label class="form-check-label" for="flexRadioDefault222">
// 										Rent
// 									</label>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Property Type:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_wrapper">
// 									<select
// 										// required
// 										onBlur={handleTextData}
// 										name="property_type"
// 										id=""
// 										className="select_box"
// 									>
// 										<option value="flat">Apartment</option>
// 										<option value="duplex">Duplex Home</option>
// 										<option value="showroom">Showroom</option>
// 										<option value="office">Office Space</option>
// 										<option value="shop">Shop</option>
// 									</select>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>City:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_wrapper">
// 									<select
// 										// required
// 										onBlur={handleTextData}
// 										name="city"
// 										id=""
// 										className="select_box"
// 									>
// 										<option value="dhaka">Dhaka</option>
// 										<option value="chittagong">Chittagong</option>
// 										<option value="khulna">Khulna</option>
// 										<option value="rajshahi">Rajshahi</option>
// 										<option value="coxbazar">Cox's Bazar</option>
// 										<option value="sylhet">Sylhet</option>
// 										<option value="gazipur">Gazipur</option>
// 										<option value="mymensingh">Mymensingh</option>
// 										<option value="rangpur">Rangpur</option>
// 									</select>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Address:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="text"
// 										name="address"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Property Name:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="text"
// 										name="property_name"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Title:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="text"
// 										name="title"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Property Description:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="text"
// 										name="property_description"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Facing:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="text"
// 										name="facing"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Property Size in sft:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="number"
// 										name="property_size"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Price:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="number"
// 										name="price"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Price is:</h6>
// 							</div>
// 							<div className="ckeckbox_wrapper">
// 								<div className="input_wrapper">
// 									<input
// 										class="form-check-input"
// 										type="radio"
// 										name="price_is"
// 										id="Fixed"
// 										value="fixed"
// 										// required
// 										onBlur={handleTextData}
// 									/>
// 									<label class="form-check-label" for="Fixed">
// 										Fixed
// 									</label>
// 								</div>
// 								<div className="input_wrapper">
// 									<input
// 										class="form-check-input"
// 										type="radio"
// 										name="price_is"
// 										value="negotiable"
// 										id="Negotiable"
// 										// required/
// 										onBlur={handleTextData}
// 									/>
// 									<label class="form-check-label" for="Negotiable">
// 										Negotiable
// 									</label>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Bedroom:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="number"
// 										name="bedroom"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Garages:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="number"
// 										name="garages"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Balconies:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="number"
// 										name="balconies"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Bathroom:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="number"
// 										name="bathroom"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Featured Image:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onChange={handleFileData}
// 										className="input_field"
// 										type="file"
// 										name="image_one"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Gallery Image:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onChange={handleFileData}
// 										className="input_field"
// 										type="file"
// 										name="image_two"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Floor Plan:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onChange={handleFileData}
// 										className="input_field"
// 										type="file"
// 										name="image_three"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Owner Name:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="text"
// 										name="owner_name"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Owner Number:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="number"
// 										name="owner_number"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section">
// 							<div className="label_wrapper">
// 								<h6>Owner email:</h6>
// 							</div>
// 							<div className="input_box">
// 								<div className="input_field_wrapper">
// 									<input
// 										// required
// 										onBlur={handleTextData}
// 										className="input_field"
// 										type="email"
// 										name="owner_gmail"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="input_section p-5">
// 							<button type="submit" className="btn btn-info container">
// 								Done
// 							</button>
// 							<p className="p-3 text-center text-danger">{message}</p>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default AddProperty;
