<script setup>
import { ref } from 'vue';
const search = ref('')

const emits = defineEmits(['NameEmit'])

const emitSearch = ()=>{
    emits('NameEmit', search.value)
}
</script>
<template>
    <input type="text" v-model="search">
    <button @click="emitSearch">search pokemon</button>
</template>
<style lang="scss" scoped>
    
</style>