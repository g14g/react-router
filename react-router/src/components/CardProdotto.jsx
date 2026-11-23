import React, { Fragment, useState, useEffect } from "react";
import "./CardProdotto.css";
import { Link } from "react-router";

function CardProdotto(props) {
    // console.log("props:", props);
    return (
        <>
            <Link key={props.id} to={`/prodotto/${props.id}`}>
                <div className="product-card">
                    <div className="img-product">
                        <img src={props.img} alt={props.title} />
                    </div>
                    <h3 title={props.title}>{props.title}</h3>
                    <p className="product-price">
                        {props.price}
                        <span>€</span>
                    </p>
                </div>
            </Link>
        </>
    );
}

export default CardProdotto;
