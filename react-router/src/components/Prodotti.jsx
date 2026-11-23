import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router";
import "./Prodotti.css";
import CardProdotto from "./CardProdotto";

function Prodotti() {
    // Qui è importante impostare il tipo di useState in array [], perché i dati provenienti dalla fetch sono array di oggetti
    const [productItems, setProductItems] = useState([]);

    // Questo permette di recuperare l'array di oggetti dei prodotti dalla fetch appena caricata la pagina
    useEffect(getProdotti, []);

    function getProdotti() {
        const url = `https://fakestoreapi.com/products`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Chiamata non ok");
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                // Appena ricevuti i dati dall'api con fetch aggiorno lo state dei prodotti
                setProductItems(data);
            })
            .catch((error) => {
                console.error("Qualcosa è andato storto");
                // navigate("/todo");
            });
    }

    const createProductCards = productItems.map((product) => {
        return (
            // <Link key={product.id} to={`/prodotto/${product.id}`}>
            //     <div className="product-card">
            //         <div className="img-product">
            //             <img src={product.image} alt={product.title} />
            //         </div>
            //         <h3>{product.title}</h3>
            //         <p className="product-price">
            //             {product.price}
            //             <span>€</span>
            //         </p>
            //     </div>
            // </Link>
            <CardProdotto key={product.id} id={product.id} link={`/prodotto/${product.id}`} img={product.image} title={product.title} price={product.price} />
        );
    });

    return (
        <>
            {createProductCards}
            {/* {productItems.map((product) => {
                return (
                    <a key={product.id} href="#">
                        <div className="product-card">
                            <div className="img-product">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <h3>{product.title}</h3>
                            <p className="product-price">
                                {product.price}
                                <span>€</span>
                            </p>
                        </div>
                    </a>
                );
            })} */}
        </>
    );
}

export default Prodotti;
