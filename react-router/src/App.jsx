import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProdottiPage from "./pages/ProdottiPage";
import ProdottoPage from "./pages/ProdottoPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/prodotti" element={<ProdottiPage />} />
                    <Route path="/prodotto/:id" element={<ProdottoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
