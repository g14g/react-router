import React, { Fragment, useState, useEffect } from "react";
import "./CardProdottiLista.css";
import { Link } from "react-router";

function CardProdottiLista(props) {
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

export default CardProdottiLista;
