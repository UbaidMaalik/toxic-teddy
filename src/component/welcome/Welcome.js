import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

const Welcome = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Fragment>
      <div className="welcome">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 wellcome-img">
              <img src="/images/wellcome.png" />
            </div>
            <div
              className="col-12 col-sm-6 wellcome-text"
              style={{ paddingTop: `${isMobile ? "5px" : "8em"} ` }}
            >
              <h3
                style={{
                  textAlign: `${isMobile ? "center" : "left"}`,
                  fontSize: `${isMobile ? "48px" : "60"}`,
                }}
              >
                WELCOME!
              </h3>
              <p>
                Toxic Teddy Club is a NFT collection of{" "}
                <strong>10,000 unique Teddies</strong> living on Ethereum
                Blockchain. In Addition to that, being a member of Toxic Teddy
                Club grants you access to members-only privileges such as:{" "}
                <strong>
                  Blunt & Brunch meets, Members exclusive red Carpet event with
                  celebrities at our Playboy Mansion in LA.
                </strong>{" "}
                Exclusive Drip-Drops for TT4L NFT holders, Members exclusive
                Love games with rewards upon completion,{" "}
                <strong>
                  each member of Toxic Teddy Club will receive angel wings to
                  Teddy’s multidimensional utilities in the Metaverse
                </strong>
                . IP rights will be released to the TT4L NFT holders.
              </p>
            </div>
            <div className="col-12 col-sm-1"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Welcome;
