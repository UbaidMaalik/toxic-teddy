import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

const Utilities = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Fragment>
      <div className="utilities" style={{ position: "relative" }}>
        <div
          className="overlay"
          style={{
            background: "url(/images/Rectangle35.png) no-repeat",
            padding: `${isMobile ? "0" : "10em"}`,
          }}
        ></div>
        <div className="container">
          <h3>UTILITIES</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus
            diam, posuere at lorem vel, placerat laoreet sapien. Proin
            ullamcorper, enim efficitur tincidunt ullamcorper, est arcu finibus
            erat, in suscipit odio nisl quis eros. Mauris dictum sem arcu, quis
            lobortis orci euismod rhoncus. Morbi porttitor feugiat velit, id
            commodo nisl rhoncus ac.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Utilities;
