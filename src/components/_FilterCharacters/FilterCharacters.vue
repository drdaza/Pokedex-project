<script setup>
import { ref } from 'vue';
const filter = ref('')

const emits = defineEmits(['FilterEmit'])

const emitFilter = ()=>{
    emits('FilterEmit', filter.value)
}
</script>
<template>
<select v-model="filter" @change="emitFilter">
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
</template>
<style lang="scss" scoped>
    
</style>