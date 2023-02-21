import React, { Fragment } from "react";
import Slider from "react-slick";

const SiteSlider = () => {
  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
  };
  return (
    <Fragment>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-sm-12">
            <Slider {...settings}>
              <div className="slider center">
                <img src="/images/slide2.png" />
              </div>
              <div className="slider center">
                <img src="/images/slide.png" />
              </div>
              <div className="slider">
                <img src="/images/slide3.png" />
              </div>
              <div className="slider">
                <img src="/images/slide.png" />
              </div>
              <div className="slider">
                <img src="/images/slide2.png" />
              </div>
              <div className="slider">
                <img src="/images/slide3.png" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SiteSlider;
