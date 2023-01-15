<script setup>
import {characterStore} from '../stores/PrincipalStore.js';
import { onBeforeMount } from 'vue';
import CardCharacters from '../components/CardCharacters/CardCharacters.vue';
import { computed, ref } from 'vue';
import SearchCharacter from '../components/SearchCharacter/SearchCharacter.vue';
import FilterCharacters from '../components/_FilterCharacters/FilterCharacters.vue';
import { RouterLink, RouterView } from 'vue-router'

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
    for (const type of character.Type) {
      if(type.type.name == filter.value) filterCharacters.push(character); 
    }
    
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
const changeFilterValue =(typeemit)=> {
  filter.value = typeemit;

}
</script>

<template>
  <main>
    <div class="filter-section">
      <div>
          <SearchCharacter @NameEmit="searchCharacter"/>
      </div>
    <FilterCharacters @FilterEmit="changeFilterValue"/>
  </div>
    <section class="cards-section">
      <div class="card-space" v-for="character of filterCategory">
        <router-link :to="{ name: 'Details', params: { id: character.Id}}" >
        <CardCharacters 
          :character="character"
        />
        </router-link>
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
    a{
      text-decoration: none;
      color: $primary-color;
    }
  }
 }
</style>
