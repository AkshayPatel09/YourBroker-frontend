import React from "react";
import "./Divider.css";
function Divider(props){
    return(
        <div  className={props.type === "Orange white" ? "left-cut cut-section" : "right-cut cut-section"} ></div>
    )
}

export default Divider;