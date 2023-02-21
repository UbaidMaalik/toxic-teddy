import React, { Fragment } from "react";

const cardData = [
  {
    title: "/images/TTC_logo_transparent.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "/images/TTC_logo_transparent.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "/images/TTC_logo_transparent.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "/images/TTC_logo_transparent.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "/images/TTC_logo_transparent.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
const Cards = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="d-flex flex-row cards">
          {cardData.map((card) => (
            <div className="p-2 card-image">
              <img src={card.title} />
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
