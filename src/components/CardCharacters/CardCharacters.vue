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
</script>

<template>
    <div :class="['card-base', typePokemonCharacter]">  
        <img :src="character.Image" alt="">
        <h1>{{ character.Name }}</h1>
        <div class="types-pokemon">
            <h3>{{ character.Type }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>