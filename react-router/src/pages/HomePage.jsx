import React, { Fragment, useState, useEffect } from "react";
import "./HomePage.css";
import NavHeader from "../components/NavHeader";

function HomePage() {
    return (
        <>
            <div id="homepage" className="page-flex">
                <div className="container">
                    <header>
                        <h1>Homepage</h1>
                        <NavHeader />
                    </header>
                    <main>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi magnam nihil possimus iure architecto necessitatibus impedit recusandae omnis expedita labore, voluptatibus nostrum, aspernatur quisquam excepturi laboriosam corrupti et sunt.</p>
                    </main>
                </div>
            </div>
        </>
    );
}

export default HomePage;
