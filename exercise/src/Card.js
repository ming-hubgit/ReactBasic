import React from "react";
import "./Card.css";

function Card(props) {
    const classes = "card " + props.className;//<div className='card todo'>
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;