
// Lamamos a nuestra api 
const API = 'https://rickandmortyapi.com/api/character/';

// Resive un id que necesitamos para selecionarlo
const getData = async (id) => {
    // si el id existe concateno
    const apiURl = id ? `${API}${id}` : API;
    try {
      const response = await fetch(apiURl); // Hace el llamado
      const data = await response.json(); // Convierte la resp a json para que se iterable
      return data;
    } catch (error) {
      console.log('Fetch Error', error);
    };
};

export default getData;