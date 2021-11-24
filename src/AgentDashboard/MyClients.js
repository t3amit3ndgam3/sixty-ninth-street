import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/contexts/AuthContext";

const MyClients = () => {
  const { currentUser } = useAuth();
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch(
      `https://sixtyninethstreet.herokuapp.com/api/getHireByAgent/${currentUser.user_email}`
    )
      .then((res) => res.json())
      .then((data) => setClient(data.data));
  }, [currentUser.user_email]);
  return (
    <>
      {client.map((clnt) => (
        <div className="col-12 col-sm-6 col-md-4 mt-3">
          <div className="BSRSec">
            <Link to={`/singleAgent/${clnt._id}`} className="RjcardLInk">
              <div className="card RjcustomCard">
                <div className="card-body">
                  <h5 className="card-title">{clnt.user_email}</h5>
                  <p className="card-text pt-2 RjAgentPageP">
                    {clnt.agent_name}
                  </p>
                  <span className="RjAgentPageSpan">{clnt.agent_title}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyClients;
