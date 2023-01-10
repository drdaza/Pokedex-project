<script setup>
import {characterStore} from '../stores/PrincipalStore.js';
import { onBeforeMount } from 'vue';

const principalStore = characterStore();

onBeforeMount(()=>{
  principalStore.AsignCharacters();
})

</script>

<template>
  <main>
    <div v-for="character of principalStore.Characters">
      <img :src="character.Image" :alt="`Imagen de ${character.Name}`">
      <h1>{{character.Name}}</h1>
    </div>
  </main>
</template>
