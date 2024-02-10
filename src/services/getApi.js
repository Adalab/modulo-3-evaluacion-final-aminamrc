

const getApi = (filterHouse) => {


  return fetch (`https://hp-api.onrender.com/api/characters/house/${filterHouse}`) 
  .then((response) => response.json())
  .then((data) => {
    const cleanData = data.map((char) => {
      return {
        image: char.image,
        name: char.name,
        species: char.species,
        id: char.id,
        status: char.alive,
        gender: char.gender,
        house: char.house,
      };
    });
    return cleanData;
  });
};


export default getApi
