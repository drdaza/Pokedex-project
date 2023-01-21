<script setup>
import { useRouter, useRoute } from 'vue-router';
import { characterStore } from '../stores/PrincipalStore';
import { computed } from 'vue';
import CardCharacters from '../components/CardCharacters/CardCharacters.vue';
import { onBeforeMount } from 'vue';
const principalStore = characterStore();
const router = useRouter();  
const route = useRoute();
/* const id = route.params.id; */

const props = defineProps({
    id:{
        type: Number,
        required: true
    }
});
/* console.log(parseInt(props.id)); */
/* console.log(typeof(id)+ id); */

onBeforeMount(()=>{

  principalStore.AsignCharacters();
})

const characterDetails = computed(()=>{
    let characterFound = [];
    if(parseInt(props.id)===0){
        const random = randomPokemon(1,152);
        for (const character of principalStore.Characters) {
            if(character.Id === random){
            characterFound.push(character)
            return characterFound;
            }
        }
        return principalStore.Characters;
    }
    
    for (const character of principalStore.Characters) {
        if(character.Id === parseInt(props.id)){
            characterFound.push(character)
            return characterFound;
        }
    }
});
const nextPokemon = computed(()=>{
    for (const character of principalStore.Characters) {
        if(character.Id==props.id+1){
            return `${character.Name} N:${character.Id}`
        }
    }
    return 
})
const goToNextPokemon = ()=>{
    router.push({ name: 'Details', params: { id: props.id + 1 }, props:{id: props.id + 1} });
}
const goToBeforePokemon = ()=>{
    router.push({ name: 'Details', params: { id: props.id - 1 }, props:{id: props.id - 1} });
}

</script>
<template>
    <main>
        <div class="navegation-buttons">
            <div @click="goToBeforePokemon" class="left-button">
                <h1>Anterior</h1>
            </div>
            <div class="rigth-button" @click="goToNextPokemon">
                <h1>{{nextPokemon}}</h1>
            </div>
        </div>
        <div class="card-space" v-for="character of characterDetails">
            <CardCharacters 
            :type-card="'info-card'"
            :character="character" />
        </div>
        
    </main>
</template>
<style lang="scss" scoped>
@use "../assets/scss/main" as *;
main{
    @include FlexDisplay(column, normal, center, 100%, auto);
    .card-space{
        position: relative;
        top: -20px;
        width: 80%;
        height: 90vh;
        margin-bottom: 2%;
        
    }
        .navegation-buttons {
            @include FlexDisplay(row, space-between, center, 100%, 20vh);
            
    
            .left-button {
                @include FlexDisplay(row, space-evenly, center, 49.6%, 100%);
                background-color: $terthiary-color;
                position: relative;
                top: 0;
                z-index: 0;
            }
    
            .rigth-button {
                @include FlexDisplay(row, space-evenly, center, 49.6%, 100%);
                background-color: $terthiary-color;
                position: relative;
                top: 0;
                z-index: 0;
    
            }
    
            .left-button:hover {
                transition: all 0.5s ease;
                background-color: darkcyan;
                cursor: pointer;
            }
    
            .rigth-button:hover {
                transition: all 0.5s ease;
                background-color: darkcyan;
                cursor: pointer;
            }
            
        }
    
}
</style>