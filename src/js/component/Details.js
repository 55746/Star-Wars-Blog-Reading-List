import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Details = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <>
      {store.singleCharacter.result ? (
        <div className="card mb-3" style={{ maxWidth: "1000" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={store.img + store.singleCharacter.result.uid + ".jpg"}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {store.singleCharacter.result.properties.name}
                </h5>
                <p className="card-text">
                  <div className="randomText">
                    {store.singleCharacter.result.description}
                  </div>
                  <div
                    className="row g-2 g-lg-3"
                    style={{ position: "absolute", bottom: "0px" }}
                  >
                    <div className="col">
                      <div className="p-3 ">
                        <h6>Name</h6>
                        {store.singleCharacter.result.properties.name}
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h6>Year</h6>
                        {store.singleCharacter.result.properties.birth_year}
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h6>Gender</h6>
                        {store.singleCharacter.result.properties.gender}
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h6>Height</h6>
                        {store.singleCharacter.result.properties.height}
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h6>Skin Color</h6>
                        {store.singleCharacter.result.properties.skin_color}
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3">
                        {store.singleCharacter.result.properties.eye_color}
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
