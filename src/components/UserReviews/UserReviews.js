import React, { useState } from "react";
import "./UserReviews.css";

const UserReviews = () => {
  const [reviews, setReviews] = useState({});
  console.log(reviews);

  const handleUserReviews = (e) => {
    const data = { ...reviews };
    data[e.target.name] = e.target.value;
    setReviews(data);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    fetch("https://sixtyninethstreet.herokuapp.com/api/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        window.alert("Reviews Done");
        e.target.reset();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="navSpace p_bg topUserReviewsSection">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 p-5">
            <div className="userReviewsSection">
              <h1>User Reviews Sections</h1>
              <form onSubmit={handleUserSubmit} className="mt-5">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="user_name"
                    onBlur={handleUserReviews}
                    required
                  />
                </div>
                <div class="mb-5">
                  <label for="exampleInputEmail2" class="form-label">
                    Your Valuable Words
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="exampleInputEmail2"
                    name="user_reviews"
                    onBlur={handleUserReviews}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="submit"
                    class="wpresidence_button agent_submit_class container"
                    id="agent_submit"
                    value="Reviews Done"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
