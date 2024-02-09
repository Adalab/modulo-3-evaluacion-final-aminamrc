

const getApi = (filterHouse) => {


  return fetch (`https://hp-api.onrender.com/api/characters/house/${filterHouse}`) 
  .then((response) => response.json())
  .then((data) => {
    const cleanData = data.map((char) => {
      return {
        image: char.image,
        name: char.name,
        species: char.species,
      };
    });
    return cleanData;
  });
};


export default getApi
