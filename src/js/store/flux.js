const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: { img: "https://starwars-visualguide.com/assets/img/character/" },
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
      },
    },
  };
};

export default getState;
