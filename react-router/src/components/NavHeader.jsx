import React, { Fragment, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import "./NavHeader.css";

function NavHeader() {
    return (
        <>
            <nav id="nav-header">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Chi Siamo</NavLink>
                    </li>
                    <li>
                        <NavLink to="/prodotti">Prodotti</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavHeader;
