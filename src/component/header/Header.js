import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="col-6 col-sm-3 logo">
            <img src="/images/TTC_logo_transparent 2.png" />
          </div>
          <div className="col-6 col-sm-3 menu-btn">
            <Button className="px-4">Mint</Button>
            <Button secondNavBtn>
              <img src="/images/Untnnnitled-1 1.png" />
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
