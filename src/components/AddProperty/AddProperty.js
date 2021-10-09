import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProperty = () => {
	const [formInfo, setFormInfo] = useState({});
	const [specification, setSpecification] = useState({});
	const [formFile, setFormFile] = useState({});

	console.log(specification);

	const handleBlur =(e)=>	{
		const newData = {...formInfo};
		newData[e.target.name ]= e.target.value
		setFormInfo(newData);
	}
	const handleBlurSpecification =(e)=>	{
		const newData = {...specification};
		newData[e.target.name ]= e.target.value
		setSpecification(newData);
	}


	const handleFileChange =(e)=>{
		const newFile = {...formFile};
		newFile[e.target.name] = e.target.files[0];
		setFormFile(newFile);
	}

	const handleSubmit =(e)=>{
		let BrandName = formInfo.productBrand.replace(/\s/g, "");
		let CategoryName = formInfo.productCategory.replace(/\s/g, "");
		e.preventDefault();
		const formData = new FormData();
		formData.append('category', CategoryName);
		formData.append('brand', BrandName);
		formData.append('name', formInfo.productName);
		formData.append('price', formInfo.productPrice);
		formData.append('imageOne', formFile.imageOne);
		formData.append('imageTwo', formFile.imageTwo);
		formData.append('imageThree', formFile.imageThree);
		formData.append('criteria1', specification.criteria1);
		formData.append('criteria2', specification.criteria2);
		formData.append('criteria3', specification.criteria3);
		formData.append('criteria4', specification.criteria4);
		formData.append('criteria5', specification.criteria5);
		formData.append('criteria6', specification.criteria6);
		formData.append('criteria7', specification.criteria7);
		formData.append('criteria8', specification.criteria8);
		formData.append('criteria9', specification.criteria9);
		formData.append('criteria10', specification.criteria10);
		formData.append('criteria11', specification.criteria11);
		formData.append('criteria12', specification.criteria12);
		formData.append('criteria13', specification.criteria13);
		formData.append('criteria14', specification.criteria14);
		formData.append('criteria15', specification.criteria15);
		formData.append('criteria16', specification.criteria16);
		formData.append('criteria17', specification.criteria17);

		console.log(formData);
		// fetch('http://localhost:5000/addProduct',{
		// 	method:'POST',
		// 	body:formData
		// })
		// .then( res => res.json())
		// .then( data => {
		// 	window.alert('Data Inserted');
		// })
		// .catch(error=> console.error(error))

		// e.target.reset();
	}
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="sidenavBar col-md-3">
					<div className="DexSideNacBar">
						<ul>
							<li>
								{" "}
								<Link to="#">Add Product</Link>{" "}
							</li>
							<li>
								{" "}
								<Link to="#">All Product</Link>{" "}
							</li>
							<li>
								{" "}
								<Link to="#">Sells Product</Link>{" "}
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-9 p-5">
					<div className="addProductSection">
						<form onSubmit={handleSubmit}>
                            <div className="row">
							<div className="col-md-6">
								<div class="mb-2">
									<label for="productCategory" class="form-label">
										Product Category
									</label>
									<input
										type="text"
										class="form-control"
										id="productCategory"
										name="productCategory"
										required
										onBlur={handleBlur}
									/>
								</div>
								<div class="mb-2">
									<label for="productBrand" class="form-label">
										Product Brand
									</label>
									<input
										type="text"
										class="form-control"
										id="productBrand"
										name="productBrand"
										required
										onBlur={handleBlur}
									/>
								</div>
								<div class="mb-2">
									<label for="productName" class="form-label">
										Product Name
									</label>
									<input
										type="text"
										class="form-control"
										id="productName"
										name="productName"
										required
										onBlur={handleBlur}
									/>
								</div>
								<div class="mb-2">
									<label for="productPrice" class="form-label">
										Product Price
									</label>
									<input
										type="text"
										class="form-control"
										id="productPrice"
										name="productPrice"
										required
										onBlur={handleBlur}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria1
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria1"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria2
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria2"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria3
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria3"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria4
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria4"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria5
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria5"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria6
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria6"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria7
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria7"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria8
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria8"
										onBlur={handleBlurSpecification}
									/>
								</div>

							</div>
							<div className="col-md-6">
								<div class="mb-2">
									<label for="imageOne" class="form-label">
										Product Image One
									</label>
									<input class="form-control" type="file" id="imageOne"  name="imageOne" onChange={handleFileChange}/>
								</div>
								<div class="mb-2">
									<label for="imageTwo" class="form-label">
										Product Image two
									</label>
									<input class="form-control" type="file" id="imageTwo"  name="imageTwo" onChange={handleFileChange} />
								</div>
								<div class="mb-2">
									<label for="imageThree" class="form-label">
										Product Image three
									</label>
									<input class="form-control" type="file" id="imageThree"  name="imageThree" onChange={handleFileChange}/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria9
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria9"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria10
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria10"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria11
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria11"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria12
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria12"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria13
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria13"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria14
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria14"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria15
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria15"
										onBlur={handleBlur}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria16
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria16"
										onBlur={handleBlurSpecification}
									/>
								</div>
								<div class="mb-2">
									<label for="productDetails" class="form-label">
									criteria17
									</label>
									<input
										type="text"
										class="form-control"
										id="productDetails"
										name="criteria17"
										onBlur={handleBlurSpecification}
									/>
								</div>
							</div>
							<button type="submit" className="container btn btn-info btn-sm">
								Done
							</button>
                            </div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

// export default Admin;

export default AddProperty;
