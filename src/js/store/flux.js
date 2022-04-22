const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: {},
      img: "https://starwars-visualguide.com/assets/img/characters/",
      singleCharacter: {},
      favourites: [],
    },
    actions: {
      getData: () => {
        fetch("https://www.swapi.tech/api/people/", {
          // FIGURING OUT HOW TO GET THE RIGHT END TO THE URL TO SHOW US ALL THE INFO IN A LIST
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
      addingFavourites: (name) => {
        let store = getStore();
        setStore({ favourites: [...store.favourites, name] });

        // setStore({ favourites: [...store.favourites, store.name] });

        console.log("this is working");
      },
      deletes: (index) => {
        let par = getStore().favourites.filter((result, i) => index !== i);
        setStore({ favourites: par });
      },
    },
  };
};

export default getState;
