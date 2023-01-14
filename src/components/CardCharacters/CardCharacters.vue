<script setup>
import { computed } from 'vue'; 
import ApiPlayLoad from '../../ApiCall/ApiPLayload/ApiPlayLoad';
const props = defineProps ({
    character:{
        type: ApiPlayLoad,
        required: true,
    },
    typeCard:{
        type: String,
        default: 'card-base'
    }
});
const typePokemonCharacter = computed(()=> {
    if(props.character.Type[0] == undefined ) return;
    return props.character.Type[0].type.name;
});

const changeTypeCard = computed(()=>{
    if(props.typeCard =='info-card') return 'info-card';
    return;
}) 
function changeFirstLetterToUpperCase(word) {
    return word.charAt(0).toUpperCase()+word.slice(1);
}

</script>

<template>
    <div :class="['card-base', typePokemonCharacter, changeTypeCard]">  
        <img :src="character.Image" alt="">
        <h1>{{ changeFirstLetterToUpperCase(character.Name) }}</h1>
        <div class="types-pokemon">
            <h3>{{ character.Type[0].type.name }}</h3>
            <h3 v-if="character.Type.length > 1">{{ character.Type[1].type.name }}</h3>
        </div>
        <div v-if="changeTypeCard=='info-card'">i am a uper mega info card bro</div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/pokemonTypes";
@use '../../assets/scss/main' as *;
.types-pokemon{
    @include FlexDisplay(row, space-evenly, center, 100%, auto);
}
</style>