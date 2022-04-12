import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const People = () => {
  let images = "https://starwars-visualguide.com/assets/img/characters";
  const { store, actions } = useContext(Context);
  console.log(store.list.results);
  return (
    <div class="container-fluid py-2">
      <div class="d-flex flex-row flex-nowrap overflow-auto">
        {store.list.results &&
          store.list.results.map((list, index) => {
            return (
              <div
                key={index}
                // className="card w-100 p-3"
                style={{
                  height: "22rem",
                  width: "17rem",
                  display: "inline-block",
                  padding: "10px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div>
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div></div>
                  </a>
                </div>

                <div className="card-body">
                  <h5 className="card-title"> {list.name}</h5>
                  <p className="card-text">
                    {/* THIS IS WHERE WE WILL PASS THE DESCRIPTION */}
                    <span key={index} className="boxtype">
                      {/* we are trying to enter in a picture here using the split function */}
                      {/* {list.split(images.index)} */}
                    </span>
                  </p>
                  <button type="button" className="btn btn-primary">
                    Button
                  </button>
                  <button>
                    <i
                      class="border border-warning fa fa-heart"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      )
    </div>
  );
};
