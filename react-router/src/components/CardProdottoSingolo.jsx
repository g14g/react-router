import React, { Fragment, useState, useEffect } from "react";
import "./CardProdottoSingolo.css";

function CardProdottoSingolo(props) {
    // console.log("props:", props);
    return (
        <>
            <div className="product-card-detail">
                <div className="img-product">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="product-detail">
                    <h3 title={props.title}>{props.title}</h3>
                    <p className="product-description">{props.description}</p>
                    <p className="product-price">
                        {props.price}
                        <span>€</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default CardProdottoSingolo;
