import React from "react";
import "./Card.css";

function Card(props){
    return (
        <div className="col col-lg-4 col-sm-12 col-12 card-margin">
              <div className="card">
            <img src={props.imageURL} className="card-img-top card-img-size" alt=""></img>
            <div className="card-body">
                <h3 className="card-title">₹{props.price}/-</h3>
                <h4 className="card-subtitle">{props.size}</h4>
                <p className="card-text">{props.city}, {props.country}</p>

            </div>

        </div>
        </div>
      
    )
}

export default Card;
