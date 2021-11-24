import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/contexts/AuthContext";

const Client = () => {
  const { currentUser } = useAuth();
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch(
      `https://sixtyninethstreet.herokuapp.com/api/getHireByUser/${currentUser.user_email}`
    )
      .then((res) => res.json())
      .then((data) => setClient(data.data));
  }, [currentUser.user_email]);
  return (
    <>
      {client.length ? (
        client.map((clnt) => (
          <div className="col-12 col-sm-6 col-md-4 mt-3">
            <div className="BSRSec">
              <p className="RjcardLInk">
                <div className="card RjcustomCard">
                  <img
                    src={clnt.agent_image}
                    className="card-img-top RjagentsCardImg"
                    alt="agent_image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{clnt.agent_name}</h5>
                    <p className="card-text pt-2 RjAgentPageP">
                      {clnt.agent_title}
                    </p>
                    <span className="RjAgentPageSpan">
                      Hire Amount - {clnt.fees}
                    </span>
                  </div>
                </div>
              </p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <span className="me-2">You currently dont have any hired agent.</span>
          <Link to="/agents">Hire an agent?</Link>
        </div>
      )}
    </>
  );
};

export default Client;
