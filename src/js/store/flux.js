const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: {},
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

        // fetch("https://www.swapi.tech/api/planets", {
        //   method: "GET",
        //   redirect: "follow",
        // })
        //   .then((res) => res.json())
        //   .then((data) => setStore({ list: data }))
        //   .catch((err) => console.error(err));
      },
    },
  };
};

export default getState;
