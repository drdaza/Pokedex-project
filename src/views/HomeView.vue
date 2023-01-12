<script setup>
import {characterStore} from '../stores/PrincipalStore.js';
import { onBeforeMount } from 'vue';
import CardCharacters from '../components/CardCharacters/CardCharacters.vue';
import { computed, ref } from 'vue';

const principalStore = characterStore();
const filter = ref('');

onBeforeMount(()=>{
  principalStore.AsignCharacters();
})
const filterCategory = computed(()=>{
  let filterCharacters = [];
  if(filter.value == '' || filter.value == 'all') return principalStore.Characters;
  for (const character of principalStore.Characters) {
    if(character.Type == filter.value) filterCharacters.push(character); 
  }
  return filterCharacters;

})
</script>

<template>
  <main>
    <div><select v-model="filter">
      <option disabled value="">Please select one filter</option>
      <option>all</option>
      <option>bug</option>
      <option>dragon</option>
      <option>grass</option>

    </select></div>
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
