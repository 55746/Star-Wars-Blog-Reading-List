import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Details = () => {
  const images = "https://starwars-visualguide.com/assets/img/characters/";
  const { store, actions } = useContext(Context);
  return (
    <div>
      {store.list.results &&
        store.list.results.map((list, index) => {
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img
              src={images + list.uid + ".jpg"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{list.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>;
        })}{" "}
    </div>
  );
};
