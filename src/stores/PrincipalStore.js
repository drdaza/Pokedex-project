import {defineStore} from 'pinia';
import ApiCall from '../ApiCall/ApiCall';

export const characterStore = defineStore({
    id: 'characters',
    state: ()=>({
        Characters: [],
    }),
    actions:{
        async AsignCharacters(){
            const MyApiCall = new ApiCall('Pokemon')
            const Response = MyApiCall.chooseApi();

            this.Characters = await Response.getAll();
            console.log(this.Characters);
        },
        getChracterbyId(characterId){
            return this.Characters.find(item => item.id == characterId)
        }
    }

})