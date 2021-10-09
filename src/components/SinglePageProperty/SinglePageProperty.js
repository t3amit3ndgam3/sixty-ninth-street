import React, { useState, useRef } from "react";
import image1 from "../../images/DreamHome/dream.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faLandmark,
  faShower,
  faPhoneAlt,
  faShareAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const SinglePageProperty = () => {
  const [show, setShow] = useState(true);
  const form = useRef();
  const handleSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
  };
  return (
    <div className="spp_container navSpace pt-3">
      <div className="spp_wrapper">
        <div className="notice_area">
          <div className="single_property_labels_left">
            <div className="label_btn">
              <div className="type_label">For type</div>
              <div className="type_label">House Type</div>
            </div>
            <h1 className="entry_title">Gorgeous Farm in Jersey</h1>

            <p>
              <FontAwesomeIcon
                className="title_prop_icon"
                icon={faMapMarkerAlt}
              />
              Ferris Park, Jersey City, Greenville
            </p>
          </div>
          <div className="single_property_labels_right">
            <div className="price_label">$780,000</div>
            <div className="prop_btn">
              <button>
                <FontAwesomeIcon className="prop_btn_icon" icon={faShareAlt} />
                Share
              </button>
              <button>
                <FontAwesomeIcon className="prop_btn_icon" icon={faHeart} />
                Add to favourites
              </button>
            </div>
          </div>
        </div>

        <div className="property_details_container">
          <div className="listing_content">
            <div className="property_image_carousels">
              <Carousel
                interval="2000"
                transitionTime="1000"
                showStatus={false}
                showIndicators={false}
              >
                <div>
                  <img src="https://picsum.photos/700/400?img=1" alt="" />
                </div>
                <div>
                  <img src="https://picsum.photos/700/400?img=2" alt="" />
                </div>
                <div>
                  <img src="https://picsum.photos/700/400?img=3" alt="" />
                </div>
              </Carousel>
            </div>
            <div className="property_overview">
              <h4>Overview</h4>
              <ul className="overview_element">
                <li>
                  <FontAwesomeIcon className="prop_icon" icon={faBed} />
                </li>
                <li>bedrooms</li>
              </ul>
              <ul className="overview_element">
                <li>
                  <FontAwesomeIcon className="prop_icon" icon={faShower} />
                </li>
                <li>bathrooms</li>
              </ul>
              <ul className="overview_element">
                <li>
                  <FontAwesomeIcon className="prop_icon" icon={faLandmark} />
                </li>
                <li>
                  190 ft<sup>2</sup>
                </li>
              </ul>
            </div>
            <div className="property_description">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                dignissimos eaque deserunt tenetur eius quis optio dicta maiores
                nihil sint consequatur, at necessitatibus quos praesentium nam
                adipisci expedita tempora architecto.
              </p>
            </div>
            <div className="accordion">
              <div className="item">
                <div className="title" onClick={() => setShow(!show)}>
                  <h4>Address</h4>
                  <span>{show ? "-" : "+"}</span>
                </div>
                {show && (
                  <div className="content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vel asperiores deserunt eligendi dolor velit numquam magnam
                    suscipit laboriosam animi neque!
                  </div>
                )}
              </div>
            </div>
            <div className="accordion">
              <div className="item">
                <div className="title" onClick={() => setShow(!show)}>
                  <h4>Details</h4>
                  <span>{show ? "-" : "+"}</span>
                </div>
                {show && (
                  <div className="property_details_content">
                    <div className="left_content">
                      <ul>
                        <li>
                          <strong>Property id:</strong> 2521
                        </li>
                        <li>
                          <strong>Property Size:</strong> 5020 ft <sup>2</sup>{" "}
                        </li>
                        <li>
                          <strong>Rooms:</strong> 4
                        </li>
                        <li>
                          <strong>Bathrooms:</strong> 2
                        </li>
                        <li>
                          <strong>Garages:</strong> 1
                        </li>
                        <li>
                          <strong>For:</strong> Sale
                        </li>
                      </ul>
                    </div>
                    <div className="right_content">
                      <ul>
                        <li>
                          <strong>Type:</strong> Apartment
                        </li>
                        <li>
                          <strong>Price:</strong> 220,000
                        </li>
                        <li>
                          <strong>Bedrooms:</strong> 4
                        </li>
                        <li>
                          <strong>Year Built:</strong> 2002
                        </li>
                        <li>
                          <strong>Rooms:</strong> 4
                        </li>
                        <li>
                          <strong>Facing:</strong> North
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="accordion">
              <div className="item">
                <div className="title" onClick={() => setShow(!show)}>
                  <h4>Features</h4>
                  <span>{show ? "-" : "+"}</span>
                </div>
                {show && (
                  <div className="content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vel asperiores deserunt eligendi dolor velit numquam magnam
                    suscipit laboriosam animi neque!
                  </div>
                )}
              </div>
            </div>
            <div className="accordion">
              <div className="item">
                <div className="title" onClick={() => setShow(!show)}>
                  <h4>Floor Plan</h4>
                  <span>{show ? "-" : "+"}</span>
                </div>
                {show && (
                  <div className="floor_image_container">
                    <img src={image1} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="owner_details_section">
            <h5>Property owner details</h5>
            <h4>Owner name</h4>
            <p>Property id: 222222</p>
            <h6>
              <FontAwesomeIcon className="prop_icon_phone" icon={faPhoneAlt} />
              0167648982
            </h6>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="owner_details_form"
            >
              <div class="group">
                <input
                  className="contact_input"
                  name="name"
                  type="text"
                  required
                />
                <span class="bar"></span>
                <label className="contact_label">Name</label>
              </div>
              <div class="group">
                <input
                  className="contact_input"
                  name="number"
                  type="number"
                  required
                />
                <span class="bar"></span>
                <label className="contact_label">Phone Number</label>
              </div>
              <div class="group">
                <input
                  className="contact_input"
                  name="email"
                  type="text"
                  required
                />
                <span class="bar"></span>
                <label className="contact_label">Email</label>
              </div>
              <div class="group">
                <input
                  className="contact_input"
                  name="message"
                  type="text"
                  required
                />
                <span class="bar"></span>
                <label className="contact_label">Your Messege</label>
              </div>
              <div className="spp_button_wrap">
                <button type="submit">Send Messege</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageProperty;
