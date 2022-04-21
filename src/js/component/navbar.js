import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  
  return(
  <>
  ({store.favoutites.name ? (
    <nav className="navbar navbar-light bg-light mb-3">
    <Link to="/">
    <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
        <div className="dropdown">
        <a
        className="btn btn-secondary dropdown-toggle"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ></a>
        
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
        <a className="dropdown-item" href="#">
        {store.favourites.name}
        </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
            </div>
            </Link>
            </div>
            ) : "loading"
  </nav>
  )
  </>
  )}

          