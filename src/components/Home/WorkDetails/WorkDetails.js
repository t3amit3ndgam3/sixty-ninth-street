import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const WorkDetails = ({ Work }) => {
  return (
    <div className="col-md-4 text-center workDetails_wrapper">
      <img src={Work.image} alt="workdetails_logo" />
      <h4 className="mt-2 mb-4">{Work.name}</h4>
      <p className="text-secondary">{Work.description}</p>
      <p>
        <Link to="/" className="workdetails_read_more">
          Read More <FontAwesomeIcon icon={faCaretRight} />
        </Link>
      </p>
    </div>
  );
};

export default WorkDetails;
