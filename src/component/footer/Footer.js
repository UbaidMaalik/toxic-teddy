import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Fragment>
      <div
        className="footer"
        style={{
          backgroundImage: "url(/images/bannerBg.png)",
          position: "relative",
        }}
      >
        <div
          className="overlay-team"
          style={{
            background: "url(/images/Rectangle35.png) no-repeat",
            padding: `${isMobile ? "0" : "10em"}`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <h3
                style={{
                  textAlign: `${isMobile ? "left" : "left"}`,
                  fontSize: `${isMobile ? "48px" : "60px"}`,
                  color: "#fff",
                  paddingBottom: "20px",
                  paddingTop: "1em",
                }}
              >
                CURIOUS?
                <br />
                GET IN TOUCH
              </h3>
              <p>
                We can’t promise a reply but we’d love to hear your thoughts.{" "}
              </p>
            </div>
            <div className="col-12 col-sm-6"></div>
          </div>
          <div className="row pt-5">
            <div className="col-12 col-sm-6 contact">
              <h2>CONTACT US</h2>
              <p>info@toxicteddyclub.com</p>
            </div>
            <div className="col-12 col-sm-6 follow">
              <h2>FOLLOW US</h2>
              <i class="fab fa-github-alt"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram-square"></i>
              <i class="fab fa-facebook-square"></i>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12 col-sm-5"></div>
            <div className="col-12 col-sm-3 bottom-bar">
              <img src="/images/TTC_logo_transparent 2.png" />
              <p>10,000 unique Teddies living on Ethereum Blockchain.</p>
              <p>Copyright © 2022, All rights reserved.</p>
            </div>
            <div className="col-12 col-sm-5"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
