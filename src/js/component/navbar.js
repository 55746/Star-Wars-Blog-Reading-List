import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Link to="/">
        <span
          className="navbar-brand mb-0 h1"
          style={{
            position: "absolute",
            zIndex: "1",
          }}
        >
          Star Wars
        </span>
      </Link>
      <div
        class="dropdown"
        style={{
          display: "flex",
          justifyContent: "right",
          // backgroundColor: "black",
        }}
      >
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favourites{" "}
          <span
            style={{
              backgroundColor: "dimgray",
              borderRadius: "5px 5px 5px",
              border: "1px solid black",
              padding: "5px",
            }}
          >
            {store.favourites.length}
          </span>
        </button>
        <ul
          class="dropdown-menu p-0"
          aria-labelledby="dropdownMenuButton1"
          style={{ textAlign: "center" }}
        >
          {store.favourites &&
            store.favourites.map((list, index) => {
              return (
                <li key={index} className="card" style={{ width: "16rem" }}>
                  <Link to={"/Details/" + list.uid}>
                    <a
                      onClick={() => {
                        actions.singleCharacter(list.uid);
                      }}
                      className=""
                    >
                      {list.name}
                    </a>
                  </Link>
                  <button
                    style={{ display: "inline-block" }}
                    onClick={() => {
                      actions.deletes(index);
                    }}
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
