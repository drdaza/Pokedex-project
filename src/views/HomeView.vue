<script setup>
import {characterStore} from '../stores/PrincipalStore.js';
import { onBeforeMount } from 'vue';
import CardCharacters from '../components/CardCharacters/CardCharacters.vue';
import { computed, ref } from 'vue';

const principalStore = characterStore();
const filter = ref('');
const search = ref('');

onBeforeMount(()=>{
  principalStore.AsignCharacters();
})
const filterCategory = computed(()=>{
  let filterCharacters = [];
  if(filter.value == '' || filter.value == 'all') return principalStore.Characters;
  if(filter.value == search.value){
    for (const character of principalStore.Characters) {
      if(character.Name == filter.value) filterCharacters.push(character);
    }
    return filterCharacters;
  }
  for (const character of principalStore.Characters) {
    if(character.Type == filter.value) filterCharacters.push(character); 
  }
  return filterCharacters;

})
const searchCharacter = ()=>{
  if(search.value == '') return;
  for (const character of principalStore.Characters) {
    if(character.Name == search.value) filter.value = search.value;
  }
}
</script>

<template>
  <main>
    <div>
      <input type="text" v-model="search">
      <button @click="searchCharacter">search pokemon</button>
      <select v-model="filter">
        <option disabled value="">Please select one filter</option>
        <option>all</option>
        <option>bug</option>
        <option>dragon</option>
        <option>grass</option>
      </select>
  </div>
    <div class="card-space" v-for="character of filterCategory">
      <CardCharacters 
        :character="character"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped >
@use "../assets/scss/main" as *;
 main{
  @include FlexDisplay(row, center,space-evenly, 100%, auto);
  flex-wrap: wrap;
  .card-space{
    width: 27%;
    height: 40vh;
    margin: 2%;
  }
 }
</style>
