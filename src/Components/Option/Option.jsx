import React from "react";
import "./Option.css";
import home from "./home";
import Card from "../Card/Card";

function Option(props) {
  // console.log(home);
  return (
    <div
      style={{
        backgroundColor: props.title === "For Sale" ? "orange" : "white",
      }}
    >
      <div className="container option-padding">
        <div className="row">
          <div className="col col-lg-6 col-12 col-sm-12">
            <h1
              className="option-heading"
              style={{ color: props.title === "For Sale" ? "white" : "orange" }}
            >
              {props.title}
            </h1>
          </div>
          <div className="col col-lg-6 col-12 col-sm-12">
            <input
              type="text"
              placeholder="Enter city/country"
              className="search-box"
            ></input>
          </div>
        </div>

        <div className="row option-font">
          {home.map((homeItem) => (
            <Card
              imageURL={homeItem.imageURL}
              price={homeItem.price}
              size={homeItem.size}
              city={homeItem.city}
              country={homeItem.country}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Option;
