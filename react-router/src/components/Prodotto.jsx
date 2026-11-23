import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router";
import { useParams, useNavigate } from "react-router";
import "./Prodotti.css";
import CardProdotto from "./CardProdotto";

function Prodotti() {
    // Qui è importante INVECE impostare il tipo di useState in oggetto [], perché i dati provenienti dai singoli prodotti della fetch sono oggetti
    const [productItem, setProductItem] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    // Questo permette di recuperare l'oggetto del prodotto dalla fetch appena caricata la pagina
    useEffect(getProdotto, []);

    function getProdotto() {
        const url = `https://fakestoreapi.com/products/${id}`;

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
                setProductItem(data);
            })
            .catch((error) => {
                console.error("Qualcosa è andato storto");
                navigate("/prodotti");
            });
    }

    // const createProductDetail = (productItem) => {
    //     return (
    //         // <Link key={product.id} to={`/prodotto/${product.id}`}>
    //         //     <div className="product-card">
    //         //         <div className="img-product">
    //         //             <img src={product.image} alt={product.title} />
    //         //         </div>
    //         //         <h3>{product.title}</h3>
    //         //         <p className="product-price">
    //         //             {product.price}
    //         //             <span>€</span>
    //         //         </p>
    //         //     </div>
    //         // </Link>
    //         <CardProdotto key={productItem.id} id={productItem.id} link={`/prodotto/${productItem.id}`} img={productItem.image} title={productItem.title} price={productItem.price} />
    //     );
    // };

    return (
        <>
            <CardProdotto key={productItem.id} id={productItem.id} link={`/prodotto/${productItem.id}`} img={productItem.image} title={productItem.title} price={productItem.price} />
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
