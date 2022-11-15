const axios = require("axios");

const consultaAxios = async (req, res) => {
  try {
    const respuesta = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/ditto"
    );
    res.json(respuesta.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { consultaAxios };
