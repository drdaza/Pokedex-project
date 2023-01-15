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
const goToNextPokemon = ()=>{
    router.push({ name: 'Details', params: { id: props.id + 1 }, props:{id: props.id + 1} });
}
const goToBeforePokemon = ()=>{
    router.push({ name: 'Details', params: { id: props.id - 1 }, props:{id: props.id - 1} });
}

</script>
<template>
    <main>
        <div>
            <button @click="goToBeforePokemon">anterior</button>
            
        </div>
        <div class="card-space" v-for="character of characterDetails">
            <CardCharacters 
            :type-card="'info-card'"
            :character="character" />
        </div>
        <div>
            <button @click="goToNextPokemon">siguiente</button>
        </div>
    </main>
</template>
<style lang="scss" scoped>
@use "../assets/scss/main" as *;
main{
    @include FlexDisplay(row, space-evenly, center, 100%, 100vh);
    .card-space{
        width: 80%;
        height: 40vh;
        margin: 2%;
    }
}
</style>