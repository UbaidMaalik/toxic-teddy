import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

const Team = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Fragment>
      <div
        className="team"
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
          <h3
            style={{
              textAlign: `${isMobile ? "center" : "center"}`,
              fontSize: `${isMobile ? "48px" : "60px"}`,
              color: "#fff",
              paddingBottom: "20px",
            }}
          >
            THE TEAM
          </h3>
          <div className="row pb-5">
            <div className="col-12 col-sm-4 team-teddy">
              <img src="/images/team1.png" />
              <h2>Betka</h2>
              <p>Artist</p>
            </div>
            <div className=" col-12 col-sm-4 team-teddy">
              <img src="/images/team2.png" />
              <h2>Teddy</h2>
              <p>Founder</p>
            </div>
            <div className=" col-12 col-sm-4 team-teddy">
              <img src="/images/team3.png" />
              <h2>Eden</h2>
              <p>Developer</p>
            </div>
            <div className="col-12 col-sm-12 core-member">
              <h3
                style={{
                  textAlign: `${isMobile ? "center" : "center"}`,
                  fontSize: `${isMobile ? "48px" : "60px"}`,
                  color: "#fff",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                }}
              >
                CORE MEMBERS
              </h3>
            </div>
            <div className=" col-12 col-sm-3 team-teddy">
              <p>Hotshot</p>
              <p>Vasaav</p>
            </div>
            <div className=" col-12 col-sm-3 team-teddy">
              <p>Jay</p>
              <p>Pablo</p>
            </div>
            <div className=" col-12 col-sm-3 team-teddy">
              <p>Dre</p>
              <p>Amax</p>
            </div>
            <div className=" col-12 col-sm-3 team-teddy">
              <p>Saub</p>
              <p>Kush</p>
            </div>
            <div className="col-12 col-sm-12 core-member">
              <h3
                style={{
                  textAlign: `${isMobile ? "center" : "center"}`,
                  fontSize: `${isMobile ? "48px" : "60px"}`,
                  color: "#fff",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                }}
              >
                THE MODERATION TEAM
              </h3>
            </div>
            <div className=" col-12 col-sm-3 team-teddy">
              <p>Filipe</p>
              <p>Mau</p>
            </div>
            <div className=" col-12 col-sm-3 team-teddy">
              <p>Jayden</p>
              <p>Alex</p>
            </div>
            <div className=" col-12 col-sm-3 team-teddy">
              <p>George</p>
              <p>Claudia</p>
            </div>
            <div className=" col-12 col-sm-3 team-teddy">
              <p>Alex</p>
              <p>Frank</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Team;
