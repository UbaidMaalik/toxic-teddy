import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

const RoadMap = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Fragment>
      <div
        className="roadmap"
        style={{
          backgroundImage: "url(/images/bannerBg.png)",
          position: "relative",
        }}
      >
        <div
          className="overlay-roadmap"
          style={{
            background: "url(/images/Rectangle35.png) no-repeat",
            // padding: `${isMobile ? "0" : "10em"}`,
          }}
        ></div>
        <div className="container">
          <h3
            style={{
              textAlign: `${isMobile ? "center" : "center"}`,
              fontSize: `${isMobile ? "48px" : "60px"}`,
              color: "#fff",
            }}
          >
            ROADMAP 1.0
          </h3>
          <div
            class="timeline"
            style={{
              backgroundImage:
                "url(/images/TTC_logo_transparent-4.png) no-repeat",
            }}
          >
            <ul>
              <li>
                <div class="timeline-content">
                  <p>
                    A surprise twitter banner will be airdropped to our NFT
                    holder’s.
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <p>
                    The Toxic Teddy Club NFT holders will have access to
                    exclusive merch that only celebrities, artists, and tier 1
                    influencers have access to.
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <p>
                    A portion of the revenue generated from the Public Launch
                    will go towards www.cuencasoupkitchen.org
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <p>
                    Ownership and commercial usage rights given to the consumer
                    over their NFT.
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <p>
                    Minters will receive a set of angel wings which can be used
                    to soar into the Metaverse.
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <p>
                    Toxic Teddy Club will host three different exclusive
                    experiences throughout the year of 2022. We take care of our
                    own by having key note speakers from different dimensions
                    including entrepreneurs, celebrities, crypto whales, and
                    business owners at the hottest mansions in L.A. to nourish
                    us with infinite knowledge.
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <p>
                    Toxic Teddy Club NFT Holders will have exclusive access to
                    this extraordinary and interactive community.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RoadMap;
