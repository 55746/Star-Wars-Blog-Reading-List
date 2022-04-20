import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Details = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <>
      {store.singleCharacter.result ? (
        <div className="row">
          <div>
            <img
              src={store.img + store.singleCharacter.result.uid + ".jpg"}
              className="card-img-top"
              alt="..."
            />
            <div className="card text-center">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">
                  {store.singleCharacter.result.properties.name}
                </h5>
                <p className="card-text">{}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
