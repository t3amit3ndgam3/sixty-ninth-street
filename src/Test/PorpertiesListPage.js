import React, { useEffect, useState } from "react";
import DataCards from "./DataCards";
import FilterPage from "./FilterPage";

const PorpertiesListPage = () => {
  const [propertiesAll, setPropertiesAll] = useState([]);
  useEffect(() => {
    fetch("https://sixtyninethstreet.herokuapp.com/api/allProperty")
      .then((res) => res.json())
      .then((data) => {
        setPropertiesAll(data.data);
      });
  }, []);
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <FilterPage></FilterPage>
        </div>
        <div className="col-12 col-md-8">
          <DataCards propertiesAll={propertiesAll}></DataCards>
        </div>
      </div>
    </div>
  );
};

export default PorpertiesListPage;
