<script setup>
import {characterStore} from '../stores/PrincipalStore.js';
import { onBeforeMount } from 'vue';
import CardCharacters from '../components/CardCharacters/CardCharacters.vue';

const principalStore = characterStore();

onBeforeMount(()=>{
  principalStore.AsignCharacters();
})

</script>

<template>
  <main>
    <div class="card-space" v-for="character of principalStore.Characters">
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
