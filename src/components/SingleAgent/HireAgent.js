import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Payment from "../Payment/Payment";

const HireAgent = () => {
	const [user_Info, setUser_Info] = useState({});
	console.log("this is agent data bro", user_Info)
	useEffect(() => {
		const getHireAgent = JSON.parse(localStorage.getItem("HireAgentInfo"));
		setUser_Info(getHireAgent)
	}, [])


	const handlepayment = (paymentId) => {
		fetch("https://sixtyninethstreet.herokuapp.com/api/addHireAgents", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body:JSON.stringify(user_Info) 
		})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
	};
	return (
		<div className="row">
			<div className="col-md-12 pt-5">
				<Payment handlepayment={handlepayment} />
			</div>
		</div>
	);
};

export default HireAgent;
