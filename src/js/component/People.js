import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

// import {LearnMore} from ""

export const People = () => {
  const images = "https://starwars-visualguide.com/assets/img/characters/";

  // const par = list.results.uid;
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div className="row">
      {store.list.results &&
        store.list.results.map((list, index) => {
          return (
            <div key={index} className="card" style={{ width: "16rem" }}>
              <img
                src={images + list.uid + ".jpg"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{list.name}</h5>
                <p className="card-text">{list.url}</p>
                <Link
                  to={"/Details/" + list.uid}
                  href="#"
                  className="btn btn-primary"
                  style={{ display: "inline-block" }}
                >
                  {/* this button has to be connecterd to the next page */}
                  Learn More
                </Link>
                <button
                  to="/Details"
                  // href="#"
                  className="btn btn-primary"
                  style={{ display: "inline-block" }}
                >
                  {/* this heart has to be connected to the favourites and dropdown */}
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
