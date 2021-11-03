import React, { useState, useEffect } from "react";
import "./HomeLoan.css";
const HomeLoanForm = () => {
	const [textData, setTextData] = useState({});
	const [fileData, setFileData] = useState({});
	const [user_Info, setUser_Info] = useState({});
	const [message, setMessage] = useState("");
	const [alertMessage, setAlert] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
		const getUserInfo = JSON.parse(
			localStorage.getItem("userInfo" || "not found")
		);
		setUser_Info(getUserInfo);
	}, []);

	const handleTextData = (e) => {
		const newText = { ...textData };
		newText[e.target.name] = e.target.value;
		setTextData(newText);
	};
	const handleFileData = (e) => {
		const newFile = { ...fileData };
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		formData.append("upload_preset", "cubeit");
		formData.append("cloud_name", "cubeitstoreimage");

		fetch("https://api.cloudinary.com/v1_1/cubeitstoreimage/image/upload", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				newFile[e.target.name] = data.url;
				setFileData(newFile);
				console.log("image upload done");
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const handleSubmitForm = (e) => {
		e.preventDefault();
		const user_email = user_Info.user_email;
		const loan_status = "processing";
		const loanData = { ...textData, ...fileData, loan_status, user_email };
		console.log(loanData);
		fetch("https://sixtyninethstreet.herokuapp.com/api/loanReq", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(loanData),
		})
			.then((res) => res.json())
			.then((data) => {
				setMessage("Home loan request added successfully");
				setAlert(data.message);
			})
			.catch((error) => {
				console.error(error.message);
			});
	};
	setTimeout(function () {
		setAlert("");
	}, 5000);

	return (
		<div className="homeloan_section navSpace">
			<div className="homeloan_header">
				<div>
					<h1>Home Loan Application Form</h1>
				</div>
			</div>
			<div className="homeloan_wrapper">
				<div>
					<form onSubmit={handleSubmitForm}>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Full Name (পুরো নাম)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										name="name"
										className="homeloan_input_field"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Date of birth (জন্ম তারিখ)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										name="dob"
										className="homeloan_input_field"
										type="date"
									/>
								</div>
							</div>
						</div>

						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Area / Location (ঠিকানা)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="text"
										name="area"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Apartment/House No. (অ্যাপার্টমেন্ট / বাড়ি নম্বর)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="text"
										name="houseno"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Road No. (রোড নম্বর)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="text"
										name="roadno"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>City (শহর)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<select
										required
										onChange={handleTextData}
										className="homeloan_select_box"
										name="city"
									>
										<option value=" ">Choose One</option>
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
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Contact Number (যোগাযোগের নম্বর)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="text"
										name="mobileno"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Email (ইমেইল)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="text"
										name="email"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Profession (পেশা)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="text"
										name="profession"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>
									Monthly income from other sources if any (অন্যান্য উত্স থেকে
									মাসিক আয়, যদি থাকে)
								</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="text"
										name="monthly_income"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Requested Loan Amount (লোনের পরিমাণ)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="number"
										name="loan_amount"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>Tenure of your loan Years (লোনের মেয়াদ)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="number"
										name="loan_tenure"
									/>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>
									Do you have any existing loan? (আপনার কি কোনও বিদ্যমান লোন
									আছে?)
								</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<select
										required
										onChange={handleTextData}
										className="homeloan_select_box"
										name="loan_exist"
									>
										<option value=" ">Select One</option>
										<option value="yes">Yes</option>
										<option value="no">No</option>
									</select>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>National Id Number (জাতীয় পরিচয়পত্রের নং)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleTextData}
										className="homeloan_input_field"
										type="number"
										name="national_id"
									></input>
								</div>
							</div>
						</div>
						<div className="homeloan_input_section">
							<div className="homeloan_label_wrapper">
								<h6>National Id Photo (জাতীয় পরিচয়পত্রের ছবি)</h6>
							</div>
							<div className="homeloan_input_box">
								<div className="homeloan_input_wrapper">
									<input
										required
										onBlur={handleFileData}
										className="homeloan_input_field"
										type="file"
										name="national_id_pic"
									></input>
								</div>
							</div>
						</div>
						<div className="homeloan_agreement_section">
							<input
								required
								type="checkbox"
								id="agreement"
								name="agreement"
								value="yes"
								className="agreement_checkbox"
							/>
							<label for="agreement">
								I do hereby admit that all the above information that I have
								input is true & correct. If any of the above information figured
								out false or incorrect, I understand & agree that my loan
								application will be rejected. I agree to share my information
								with IDLC and follow the company policy as required.
							</label>
						</div>
						<div className="homeloan_input_section p-5">
							<button type="submit" className="btn btn-info container">
								Submit
							</button>
              {alertMessage && (
							<div className="container p-1 mt-2">
								<p className="shadow text-center bg-info">{alertMessage}</p>
							</div>
						)}
						</div>
					
					</form>
				</div>
			</div>
		</div>
	);
};

export default HomeLoanForm;
