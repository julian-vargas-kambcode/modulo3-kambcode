const { default: axios } = require("axios");

const pokeApi = "https://pokeapi.co/api/v2/pokemon/"


        //______________ PUNTO 1 ______________//


const pokeBuscador = async () => {
    const primerosPokemones = [];
    const pokeAPIs = [];
    axios.get(pokeApi)
    .then(async (response) => {
        primerosPokemones.push(...response.data.results)
        primerosPokemones.forEach(element => {
            delete element.url;
        });
        console.log(primerosPokemones); 


        //______________ PUNTO 2 ______________//
 
    
        for (const iterator of primerosPokemones) {
            pokeAPIs.push(`https://pokeapi.co/api/v2/pokemon/${iterator.name}`);
        };
        for (const pokeLink of pokeAPIs) {
            await axios.get(pokeLink).then((respuesta) =>{
                let pokeInfo = primerosPokemones.map((index) => [index, respuesta.data]); 
                console.log(pokeInfo);
            })
        };
    })
    .catch((error) => {
        console.log(error, "ha ocasionado un error");
    });
    
    
};

pokeBuscador();

