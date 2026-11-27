import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavHeader from "./components/NavHeader";
import AboutPage from "./pages/AboutPage";
import ProdottiPage from "./pages/ProdottiPage";
import ProdottoSingoloPage from "./pages/ProdottoSingoloPage";

function App() {
    return (
        <>
            <BrowserRouter>
                {/* <NavHeader /> */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/prodotti" element={<ProdottiPage />} />
                    <Route path="/prodotto/:id" element={<ProdottoSingoloPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
