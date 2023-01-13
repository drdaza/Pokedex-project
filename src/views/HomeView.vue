<script setup>
import {characterStore} from '../stores/PrincipalStore.js';
import { onBeforeMount } from 'vue';
import CardCharacters from '../components/CardCharacters/CardCharacters.vue';
import { computed, ref } from 'vue';
import SearchCharacter from '../components/SearchCharacter/SearchCharacter.vue';

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
const searchCharacter = (nameCharacter)=>{
  if(nameCharacter == '') return;
  for (const character of principalStore.Characters) {
    if(character.Name == nameCharacter){ 
      search.value = nameCharacter;
      filter.value = search.value;
    }
  }
}
</script>

<template>
  <main>
    <div class="filter-section">
      <div>
          <SearchCharacter @NameEmit="searchCharacter"/>
      </div>
      <select v-model="filter">
        <option disabled value="">Please select one filter</option>
        <option>all</option>
        <option>bug</option>
        <option>dragon</option>
        <option>grass</option>
        <option>fire</option>
        <option>water</option>
        <option>normal</option>
        <option>poison</option>
        <option>electric</option>
        <option>fighting</option>
        <option>flying</option>
        <option>ground</option>
        <option>rock</option>
        <option>ghost</option>
        <option>steel</option>
        <option>psychic</option>
        <option>ice</option>
        <option>dark</option>
        <option>fairy</option>
        <option>shadow</option>
        <option>unknown</option>

      </select>
  </div>
    <section class="cards-section">
      <div class="card-space" v-for="character of filterCategory">
        <CardCharacters 
          :character="character"
        />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped >
@use "../assets/scss/main" as *;
 main{
  @include FlexDisplay(column, space-evenly, center, 100%, auto);
  
  .filter-section{
    @include FlexDisplay(row, space-evenly, center, 100%, auto);
  }
  .cards-section{
    @include FlexDisplay(row, space-evenly,center, 100%, auto);
    flex-wrap: wrap;
  }
  .card-space{
    width: 27%;
    height: 40vh;
    margin: 2%;
  }
 }
</style>
