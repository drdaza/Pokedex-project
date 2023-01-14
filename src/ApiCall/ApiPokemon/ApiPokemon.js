import ApiPlayLoad from "../ApiPLayload/ApiPlayLoad";

export default class ApiPokemon{
    #Url;

    constructor(){
        this.#Url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    }

    async getAll(){
        const response = await fetch(this.#Url);
        const json = await response.json();

        let charactersPure = [];
        let charactersReturn = [];

        for (const characterRequest of json.results) {
            
            const characterResponse = await fetch(characterRequest.url);
            const characterJson = await characterResponse.json();

            charactersPure.push(characterJson);
        }
        for (const character of charactersPure) {
            const characterToAdd = new ApiPlayLoad(character.name, character.sprites.front_default, character.id, character.types);

            charactersReturn.push(characterToAdd);
        }

        return charactersReturn;

    }
}