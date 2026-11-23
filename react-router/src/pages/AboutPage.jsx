import React, { Fragment, useState, useEffect } from "react";
import "./AboutPage.css";
import NavHeader from "../components/NavHeader";

function AboutPage() {
    return (
        <>
            <div id="about" className="page-flex">
                <div className="container">
                    <header>
                        <h1>Chi siamo</h1>
                        <NavHeader />
                    </header>
                    <main>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat accusantium ullam aliquid voluptates vero. Laboriosam nisi similique deleniti facilis praesentium quos ipsa architecto, ut fuga, sunt maxime excepturi dicta!</p>
                    </main>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
