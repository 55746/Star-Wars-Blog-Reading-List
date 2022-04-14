const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: {},
      img: "https://starwars-visualguide.com/assets/img/characters/",
      singleCharacter: {},
    },
    actions: {
      getData: () => {
        fetch("https://www.swapi.tech/api/people", {
          method: "GET",
          redirect: "follow",
        })
          .then((res) => res.json())
          .then((data) => setStore({ list: data }))
          .catch((err) => console.error(err, error));
        // let url = fetch().map() +
      },
      singleCharacter: (par) => {
        fetch(`https://www.swapi.tech/api/people/${par}`, {
          method: "GET",
          redirect: "follow",
        })
          .then((res) => res.json())
          .then((data) => setStore({ singleCharacter: data }))
          .catch((err) => console.error(err, error));
      },
    },
  };
};

export default getState;
