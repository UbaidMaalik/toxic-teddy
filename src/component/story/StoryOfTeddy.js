import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

const StoryOfTeddy = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Fragment>
      <div
        className="story w-100"
        style={
          {
            // background:
            //   "linear-gradient(180deg, rgba(0, 0, 0, 0) 11.04%, #000000 100%)",
          }
        }
      >
        <div
          className="story-teddy"
          style={{ paddingTop: `${isMobile ? "10px" : "10em"} ` }}
        >
          <div className="container">
            <div className="row sot">
              <div className="col-12 col-sm-6 story-text">
                <h3
                  style={{
                    textAlign: `${isMobile ? "center" : "left"}`,
                    fontSize: `${isMobile ? "48px" : "60px"}`,
                  }}
                >
                  STORY OF TEDDY
                </h3>
                <p>
                  Meet Teddy. He’s fun, he’s daring, and he’s on a mission to
                  revolutionize the NFT space. However, he hasn’t always been
                  this way. Not long ago, Teddy was just a discarded toy thrown
                  out in the rain by a girl that once loved him. As he laid out
                  in the cold, he wished for a different life where his wildest
                  dreams could come true. His wish came true when he was struck
                  by meta-lightning during a storm that caused a glitch in
                  reality. The meta-bolt gave him the ability to travel between
                  dimensions where he met the most influential people connecting
                  him to the top. Thanks to his swagger, Teddy has become the
                  most beloved multi-dimensional guy around. Taking his
                  charismatic personality to the next level, Teddy’s current
                  business venture takes place in the NFT world. Connecting the
                  dots for a better future, he is finally ready to share his
                  mission.
                </p>
              </div>
              <div className="col-12 col-sm-5 story-img">
                <img src="/images/story.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StoryOfTeddy;
