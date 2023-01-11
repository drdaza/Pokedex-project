<script setup>
import { computed } from 'vue'; 
import ApiPlayLoad from '../../ApiCall/ApiPLayload/ApiPlayLoad';
const props = defineProps ({
    character:{
        type: ApiPlayLoad,
        required: true,
    }
});
const typePokemonCharacter = computed(()=> {
    if(props.character.Type == undefined ) return;
    return props.character.Type;
}) 
function changeFirstLetterToUpperCase(word) {
    return word.charAt(0).toUpperCase()+word.slice(1);
}
</script>

<template>
    <div :class="['card-base', typePokemonCharacter]">  
        <img :src="character.Image" alt="">
        <h1>{{ changeFirstLetterToUpperCase(character.Name) }}</h1>
        <div class="types-pokemon">
            <h3>{{ character.Type }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/pokemonTypes";

</style>