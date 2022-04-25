const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: {},
      img: "https://starwars-visualguide.com/assets/img/characters/",
      singleCharacter: {},
      favourites: [],
      randomText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non tortor in sem volutpat posuere sed sit amet velit. Donec id vestibulum sapien. Suspendisse nibh turpis, volutpat ac feugiat ut, posuere ultrices risus. Praesent iaculis eu leo vitae ullamcorper. Quisque dictum volutpat odio at viverra. Donec dignissim non nisi non sodales. Curabitur vulputate lorem eget nibh porta semper.",
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
