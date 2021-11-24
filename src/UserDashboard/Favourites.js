import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";
import "./UserDashboard.css";

const Favourites = () => {
  const bed = <FontAwesomeIcon icon={faBed} />;
  const bath = <FontAwesomeIcon icon={faBath} />;
  const objectGroup = <FontAwesomeIcon icon={faObjectGroup} />;

  const [wishlist, setwishlist] = useState([]);
  console.log("..........", wishlist);

  // const [flag, setFlag] = useState(true);
  useEffect(() => {
    setwishlist(JSON.parse(localStorage.getItem("69wishlist")));
  }, [wishlist]);

  console.log("wish list", wishlist.length);

  const removeWishlist = (key) => {
    for (var i = 0; i < wishlist.length; i++) {
      if (wishlist[i].key == key) {
        wishlist.splice(i, 1);
        console.log(wishlist);
        localStorage.setItem("69wishlist", JSON.stringify(wishlist));
        setwishlist(wishlist);
        break;
      }
    }
  };

  return (
    <div>
      <div className="dashboard_header mb-5">
        <h1>My Favourites List</h1>
      </div>
      <div>
        {wishlist.map((wish) => (
          <div className="w-75">
            <div className={`card mb-3 RjPropertiseCard  ${wish.size}`}>
              <div className="row g-0">
                <div className="col-sm-12 col-md-4 RjPropertiesImg RjPropertiesImg2">
                  <Link
                    to={`/spp/${wish.key}`}
                    className="RjPropertiesLInk wishlistIndex bg-default"
                  >
                    <img
                      src={wish.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </Link>
                </div>
                <div className="col-sm-12 col-md-8">
                  <div className="card-body">
                    <h5 className="card-title pb-2">{wish.name}</h5>
                    <h6 className="card-title pb-2">$ {wish.price}</h6>
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
                    <div className="closeButtonmain">
                      <div className="loseButtonaction">
                        <button
                          type="button"
                          className="btn-close closeButton"
                          aria-label="Close"
                          onClick={() => removeWishlist(wish.key)}
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* {!flag && <h1>Wish List empty</h1>} */}
      </div>
    </div>
  );
};

export default Favourites;
