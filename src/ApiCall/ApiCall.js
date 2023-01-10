import ApiPokemon from "./ApiPokemon/ApiPokemon";

export default class ApiCall{
    #Api;

    constructor(api){
        this.#Api = api;
    }

    chooseApi(){
        if(this.#Api==='Pokemon') return new ApiPokemon();
    }
}