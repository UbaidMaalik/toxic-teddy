import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import { Button } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-sm-12">
          <img src="/images/Group 165.png" className="w-100" />
        </div>
      </div>
      <div className="row justify-content-center bannerBtn">
        <div
          className="col-10 col-sm-4 text-center"
          style={{ marginTop: `${isMobile ? "50px" : "-80px"} ` }}
        >
          <Link
            to="#"
            className="btn"
            style={{ marginRight: `${isMobile ? "4px" : "20px"} ` }}
          >
            Join Discord
          </Link>
          <Link to="#" className="btn">
            Join Whitlist
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
