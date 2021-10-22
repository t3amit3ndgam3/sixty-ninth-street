import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faObjectGroup,
  faShareAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import imgOne from "../images/PropertyList/pone.jpg";

const Favourites = () => {
  const love = <FontAwesomeIcon icon={faHeart} />;
  const bed = <FontAwesomeIcon icon={faBed} />;
  const bath = <FontAwesomeIcon icon={faBath} />;
  const objectGroup = <FontAwesomeIcon icon={faObjectGroup} />;

  const [wishlist, setwishlist] = useState([]);
  console.log("..........", wishlist);

  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setwishlist(JSON.parse(localStorage.getItem("69wishlist")));
  }, []);

  console.log("wish list", wishlist.length);

  return (
    <div>
      <div className="dashboard_header mb-5">
        <h1>My Favourites List</h1>
      </div>
      <div>
        {flag &&
          wishlist.map((wish) => (
            <Link
              to={`/spp/${wish.key}`}
              className="RjPropertiesLInk bg-default"
            >
              <div class={`card mb-3 RjPropertiseCard  ${wish.size}`}>
                <div class="row g-0">
                  <div class="col-sm-12 col-md-4 RjPropertiesImg RjPropertiesImg2">
                    <img
                      src={imgOne}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-sm-12 col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{wish.name}</h5>
                      <h6 class="card-title">$ {wish.price}</h6>
                      <span>
                        {bed} {wish.bed}
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        {bath} {wish.bath}
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        {objectGroup} {wish.size}
                        <sup>2</sup>{" "}
                      </span>
                      <div className="RjPropertiseUserSection">
                        <div className="RjPropertiesListIcon">
                          <Link to="">{love}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        {!flag && <h1>Wish List empty</h1>}
      </div>
    </div>
  );
};

export default Favourites;
