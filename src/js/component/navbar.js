import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="dropdown">
      <a
        className="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown link
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {store.favourites &&
          store.favourites.map((list, index) => {
            return (
              <li key={index} className="card" style={{ width: "16rem" }}>
                <a className="dropdown-item" href="#">
                  {list.name}
                </a>
                <button
                  onClick={() => {
                    actions.deletes(index);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
