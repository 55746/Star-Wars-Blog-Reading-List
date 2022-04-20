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
        const store = getStore;
        if (store.favourites.unshift((car) => car.uid != name.uid)) {
          setStore({ favourites: [...store.favourites, store.name] });
          // const fav = (index) => {
          //   const par = favourites.push((result, i) => index !== i);
          //   setFavourites(par);
        }
      },
    },
  };
};

export default getState;
