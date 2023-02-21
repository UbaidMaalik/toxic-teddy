import React, { Fragment, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Faqs = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [accordion, setAccordion] = useState({
    oneAccordion: true,
    twoAccordion: true,
    threeAccordion: true,
    fourAccordion: true,
    fiveAccordion: true,
    sixAccordion: true,
  });

  const onChange = (e) =>
    setAccordion({
      ...accordion,
      [e.target.name]: !accordion[e.target.name],
    });

  return (
    <Fragment>
      <div
        className="faqs"
        style={{
          backgroundImage: "url(/images/bannerBg.png)",
        }}
      >
        <div className="container">
          <div className="col-12 col-sm-12">
            <h3
              style={{
                textAlign: `${isMobile ? "center" : "center"}`,
                fontSize: `${isMobile ? "48px" : "60px"}`,
                color: "#fff",
                paddingBottom: "1em",
                paddingTop: "1em",
              }}
            >
              FAQ's
            </h3>
            <div className="faqs" id="faq">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    onChange={onChange}
                    checked={accordion.oneAccordion}
                    name="oneAccordion"
                  />
                  <h2>What is Toxic Teddy Club?</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam deleniti vel autem veritatis, iure placeat
                    explicabo debitis incidunt, minima minus tenetur quis labore
                    velit? Consequuntur sapiente voluptas quos commodi animi?
                  </p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={onChange}
                    checked={accordion.twoAccordion}
                    name="twoAccordion"
                  />
                  <h2>What are NFT’s? Why?</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam deleniti vel autem veritatis, iure placeat
                    explicabo debitis incidunt, minima minus tenetur quis labore
                    velit? Consequuntur sapiente voluptas quos commodi animi?
                  </p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={onChange}
                    checked={accordion.threeAccordion}
                    name="threeAccordion"
                  />
                  <h2>What is so special about this collection?</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam deleniti vel autem veritatis, iure placeat
                    explicabo debitis incidunt, minima minus tenetur quis labore
                    velit? Consequuntur sapiente voluptas quos commodi animi?
                  </p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={onChange}
                    checked={accordion.fourAccordion}
                    name="fourAccordion"
                  />
                  <h2>
                    Where can i interact with out toxic teddy club nft
                    collectors?
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam deleniti vel autem veritatis, iure placeat
                    explicabo debitis incidunt, minima minus tenetur quis labore
                    velit? Consequuntur sapiente voluptas quos commodi animi?
                  </p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={onChange}
                    checked={accordion.fiveAccordion}
                    name="fiveAccordion"
                  />
                  <h2>
                    What about Metaverse? Is the project pursuing experiences in
                    metaverse?
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam deleniti vel autem veritatis, iure placeat
                    explicabo debitis incidunt, minima minus tenetur quis labore
                    velit? Consequuntur sapiente voluptas quos commodi animi?
                  </p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={onChange}
                    checked={accordion.sixAccordion}
                    name="sixAccordion"
                  />
                  <h2>What is the refund policy?</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam deleniti vel autem veritatis, iure placeat
                    explicabo debitis incidunt, minima minus tenetur quis labore
                    velit? Consequuntur sapiente voluptas quos commodi animi?
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-12 join-discord">
            <p>
              JOIN OUR
              <br />
              DISCORD!
            </p>
          </div>
          <div className="col-12 col-sm-12 text">
            <p>The community awaits you!</p>
            <Link to="#" className="discord">
              Join Whitlist
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faqs;
