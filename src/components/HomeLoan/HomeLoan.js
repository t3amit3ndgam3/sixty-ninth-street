import Styles from "./HomeLoan.module.css";
import homeloanbg from "../../images/homeloanimage.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const HomeLoan = () => {
  const {currentUser} = useAuth();
  const [Pamount, setpAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);
  const intr = interest / 1200;
  const emi = duration
    ? Math.round((Pamount * intr) / (1 - Math.pow(1 / (1 + intr), duration)))
    : 0;
  const totalAmount = duration * emi;
  var TotalAmountOfCredit = duration
    ? Math.round((emi / intr) * (1 - Math.pow(1 / (1 + intr), -duration)))
    : 0;

  const TotalAmountOfInterest = Math.round(totalAmount - TotalAmountOfCredit);
  const handleAmountChange = (e) => {
    setpAmount(e.target.value);
    console.log(e.target.value);
  };
  const handleInterestChange = (e) => {
    setInterest(e.target.value);
    console.log(e.target.value);
  };
  const handleMonthsChange = (e) => {
    setDuration(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={Styles.HomeLoan}>
      {/* SVG */}
      <section style={{ height: "300px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-5.45,124.50 C261.47,162.99 250.75,172.85 506.96,119.56 L500.00,0.00 L0.00,0.00 Z"
            style={{
              stroke: "none",
              fill: "#10257f",
            }}
          ></path>
        </svg>
      </section>
      {/* Banner */}
      <section className={Styles.Banner}>
        <p className="fs-1 fw-bold text-white">
          Financing your next home starts here
        </p>
        <img className={Styles.BannerImage} src={homeloanbg} alt="homeloanbg" />
        {!currentUser.user_name && (
          <Link className={Styles.BannerButtonLinks} to="/login">
            <button className={Styles.BannerButtons}>Account Login</button>
          </Link>
        )}

        <Link className={Styles.BannerButtonLinks} to="/loan">
          <button className={Styles.BannerButtons}>Apply For Loan</button>
        </Link>
      </section>
      {/* Loan Details Switch Starts */}
      <section className={`${Styles.loan_details} container`}>
        <p className="text-center fs-1 fw-bold">APARTMENT PURCHASE LOAN</p>
        <p className="text-center fs-4 fw-bold">
          Feel the happiness of your own home
        </p>
        <p className="text-center px-5 mx-3 ">
          Home is where our dreams begin. Home is where your happiness starts.
          Home is shelter to every phase of your life. Sixty Ninth Strrt
          Apartment Purchase Loan gives you the confidence to purchase your own
          space and live in full freedom.
        </p>
        {/* Tabs */}
        <ul
          class="nav nav-pills mb-3 row mt-5 gy-2"
          id="pills-tab"
          role="tablist"
        >
          {/* Buttons */}
          <li class="nav-item col-6 col-md-3" role="presentation">
            <button
              className={`${Styles.LoanDetailsButton} nav-link`}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Feature
            </button>
          </li>
          <li class="nav-item col-6 col-md-3" role="presentation">
            <button
              className={`${Styles.LoanDetailsButton} ${Styles.Buttons} nav-link`}
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Eligibility
            </button>
          </li>
          <li class="nav-item col-6 col-md-3" role="presentation">
            <button
              className={`${Styles.LoanDetailsButton} ${Styles.Buttons} nav-link`}
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              How can I use this loan
            </button>
          </li>
          <li class="nav-item col-6 col-md-3" role="presentation">
            <button
              className={`${Styles.LoanDetailsButton} ${Styles.Buttons} nav-link`}
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-l"
              type="button"
              role="tab"
              aria-controls="pills-l"
              aria-selected="false"
            >
              Required Document
            </button>
          </li>
        </ul>
        {/* Details */}
        <div class="tab-content" id="pills-tabContent">
          <div
            class={`${Styles.FeatureDetails} tab-pane fade show active`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <ul>
              <li>Loan Tenure: Up to 10 years loan term</li>
              <li>
                Loan Amount: Up to 80% of the apartment price including
                Registration costs
              </li>
              <li>
                Customers can take a loan to purchase an apartment without
                incurring registration costs.
              </li>
              <li>
                Full/partial early payment option of the loan amount before
                expiry.
              </li>
              <li>Transparent process in determining the interest rate</li>
              <li>No hidden charges</li>
            </ul>
            {/* Apply Button */}
            <button className={Styles.ApplyButton}>Apply now</button>
          </div>
          <div
            class={`${Styles.FeatureDetails} tab-pane fade`}
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <p>
              You can apply for this loan right now if you meet the following
              criteria:
            </p>
            <ul>
              <li>
                You should have regular income from a sustainable & valid source
                of employment or business.
              </li>
              <li>
                The Age of the main income earner should be within 65 years at
                the end of the proposed loan tenure.
              </li>
              <li>
                The Apartment being purchased should be eligible & enforceable
                security.
              </li>
            </ul>
            {/* Apply Button */}
            <button className={Styles.ApplyButton}>Apply now</button>
          </div>
          <div
            class={`${Styles.FeatureDetails} tab-pane fade`}
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <p>
              You can use this loan to purchase an appartment for individual
              ownership.
            </p>
            {/* Apply Button */}
            <button className={Styles.ApplyButton}>Apply now</button>
          </div>
          <div
            class={`${Styles.FeatureDetails} tab-pane fade`}
            id="pills-l"
            role="tabpanel"
            aria-labelledby="pills-l-tab"
          >
            <p>
              You will require some mandatory & supplementary documents to avail
              this loan. To know more details about the required documents of
              the Apartment Purchase Loan download the following PDF.
            </p>
            {/* Apply Button */}
            <button className={Styles.ApplyButton}>Apply now</button>
          </div>
        </div>
      </section>
      {/* Loan Details Switch ends */}

      {/* EMI CALCULATOR Starts */}
      <section className="container py-5">
        <div className="row">
          <p className="col-md-12 fs-1 fw-bold text-center">EMI CALCULATOR</p>
          <div className="col-md-8 mb-5">
            <p className=" fs-5 fw-bold mb-1">Loan Amount (BDT)</p>
            <input
              onChange={handleAmountChange}
              className={Styles.CalculatorInputs}
              type="number"
              placeholder="1000 BDT"
              defaultValue="1000"
            />
            <p className="fs-5 fw-bold mb-1 mt-3">Loan Tenure(in months)</p>
            <input
              onChange={handleMonthsChange}
              className={Styles.CalculatorInputs}
              type="number"
              placeholder="12 months"
              defaultValue="12"
            />
            <p className="fs-5 fw-bold mb-1 mt-3">Rate of Interest (%)</p>
            <input
              onChange={handleInterestChange}
              className={Styles.CalculatorInputs}
              type="number"
              placeholder="10%"
              defaultValue="10"
            />
          </div>
          <div className="col-md-1"></div>
          <div
            className={`${Styles.CalculatorFormOutput} 
                        col-md-3`}
          >
            <div>
              <p className="fs-3  fw-bold  text-center">
                Equal Monthly Installment(EMI)
              </p>
              <p className="fs-4 fw-bold text-center text-danger">
                <strong>&#2547;</strong> {emi ? emi : 0}
              </p>
              <button
                className={`${Styles.CalculatorFormOutputButton} ${Styles.Buttons}`}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* EMI CALCULATOR Ends */}
    </div>
  );

};

export default HomeLoan;
