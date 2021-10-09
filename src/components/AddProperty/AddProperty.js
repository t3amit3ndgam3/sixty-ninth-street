import React from "react";
import "../Home/Unmoy.css";
const AddProperty = () => {
	return (
		<div className="addProperty_section navSpace">
			<div className="addProperty_wrapper">
				<h1>Add Property</h1>
				<div>
					<form>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Property for:</h6>
							</div>
							<div className="ckeckbox_wrapper">
								<div className="input_wrapper">
									<input
										class="form-check-input"
										type="radio"
										name="PropertyFor"
										id="flexRadioDefault1"
									/>
									<label class="form-check-label" for="flexRadioDefault1">
										Sell
									</label>
								</div>
								<div className="input_wrapper">
									<input
										class="form-check-input"
										type="radio"
										name="PropertyFor"
										id="flexRadioDefault2"
										checked
									/>
									<label class="form-check-label" for="flexRadioDefault2">
										Rent
									</label>
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Property Type:</h6>
							</div>
							<div className="input_box">
								<div className="input_wrapper">
									<select name="" id="" className="select_box">
										<option value="flat">Apartment/Flat</option>
										<option value="duplex">Duplex Home</option>
										<option value="showroom">Showroom</option>
										<option value="office">Office Space</option>
										<option value="shop">Shop</option>
									</select>
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>City:</h6>
							</div>
							<div className="input_box">
								<div className="input_wrapper">
									<select name="" id="" className="select_box">
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
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Address:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="text" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Property Name:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="text" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Title:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="text" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Property Description:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="text" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Facing:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="text" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Property Size in sft:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="number" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Price:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="number" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Price is:</h6>
							</div>
							<div className="ckeckbox_wrapper">
								<div className="input_wrapper">
									<input type="checkbox" name="fixed" required />
									<label for="fixed">Fixed</label>
								</div>
								<div className="input_wrapper">
									<input type="checkbox" name="negotiable" />
									<label for="negotiable">Negotiable</label>
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Bedroom:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="number" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Garages:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="number" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Balconies:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="number" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Bathroom:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="number" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Featured Image:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="file" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Gallery Image:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="file" name="" multiple />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Floor Plan:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="file" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Owner Name:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="text" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Owner Number:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="text" name="" />
								</div>
							</div>
						</div>
						<div className="input_section">
							<div className="label_wrapper">
								<h6>Owner email:</h6>
							</div>
							<div className="input_box">
								<div className="input_field_wrapper">
									<input className="input_field" type="text" name="" />
								</div>
							</div>
						</div>
						<div className="input_section p-5">
							<button type="submit" className="btn btn-info container">
								Done
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProperty;
