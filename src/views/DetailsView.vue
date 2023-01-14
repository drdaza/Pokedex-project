<script setup>
import { useRoute } from 'vue-router';
import { characterStore } from '../stores/PrincipalStore';
import { computed } from 'vue';
import CardCharacters from '../components/CardCharacters/CardCharacters.vue';
import { onBeforeMount } from 'vue';
const principalStore = characterStore();
/* const route = useRoute();  */ 
/* const id = route.params.id; */

const props = defineProps({
    id:{
        type: String,
        required: true
    }
});
/* console.log(parseInt(props.id)); */
/* console.log(typeof(id)+ id); */

onBeforeMount(()=>{
    
  principalStore.AsignCharacters();
})

const characterDetails = computed(()=>{
    if(parseInt(props.id)===0){
        return principalStore.Characters;
    }
    let characterFound = [];
    for (const character of principalStore.Characters) {
        if(character.Id === parseInt(props.id)){
            characterFound.push(character)
            return characterFound;
        }
    }
})

</script>
<template>
    <main>
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
    @include FlexDisplay(row, space-evenly, center, 100%, auto);
    .card-space{
        width: 80%;
        height: 40vh;
        margin: 2%;
    }
}
</style>