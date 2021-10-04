import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Rabby.css";

const Navbar = () => {
	const [fixedTop, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 10);
		});
	}, []);

	return (
		<div>
			<div className="desktopNav">
				<nav
					class={`navbar navbar-expand-lg fixed-top navbar-light topNavbarCustom scroll${fixedTop}`}
				>
					<div style={{ fontFamily: "Roboto" }} class="container">
						<Link class="navbar-brand" to="/">
							SIXTY NINETH STREET
						</Link>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav ms-auto mb-2 fl-right mb-lg-0">
								<li class="nav-item ">
									<Link
										to="/"
										class="nav-link navItemCustom"
										aria-current="page"
										href="/"
									>
										HOME
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to="/properties"
										class="nav-link navItemCustom"
										aria-current="page"
										
									>
										PROPERTIES
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to="/test"
										class="nav-link navItemCustom"
										aria-current="page"
										href="/"
									>
										AGENTS
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to=""
										class="nav-link navItemCustom"
										aria-current="page"
										href="/"
									>
										ABOUT
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to=""
										class="nav-link navItemCustom"
										aria-current="page"
										href="/"
									>
										CONTACT
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			{/* .................... Down section for mobile version ............................... */}
			<div className="MoboNav">
				<nav class="navbar navbar-light bg-light fixed-top moboShadow">
					<div class="container-fluid ">
						<Link class="navbar-brand navbarBrandEdit" href="#">
							SIXTY NINETH STREET
						</Link>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div
							class="offcanvas offcanvas-end"
							tabindex="-1"
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel"
						>
							<div class="offcanvas-header">
								<h5 class="offcanvas-title" id="offcanvasNavbarLabel">
									SIXTY NINETH STREET
								</h5>
								<button
									type="button"
									class="btn-close text-reset"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>
							</div>
							<div class="offcanvas-body">
								<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
									<li class="nav-item ">
										<Link
											to=""
											class="nav-link navItemCustom"
											aria-current="page"
											href="/"
										>
											HOME
										</Link>
									</li>
									<li class="nav-item">
										<Link
											to="/properties"
											class="nav-link navItemCustom"
											aria-current="page"
											href="/"
										>
											PROPERTIES
										</Link>
									</li>
									<li class="nav-item">
										<Link
											to=""
											class="nav-link navItemCustom"
											aria-current="page"
											href="/"
										>
											AGENTS
										</Link>
									</li>
									<li class="nav-item">
										<Link
											to=""
											class="nav-link navItemCustom"
											aria-current="page"
											href="/"
										>
											ABOUT
										</Link>
									</li>
									<li class="nav-item">
										<Link
											to=""
											class="nav-link navItemCustom"
											aria-current="page"
											href="/"
										>
											CONTACT
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
