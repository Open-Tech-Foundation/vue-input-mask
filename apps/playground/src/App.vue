<script setup>
import { ref } from 'vue'
import { InputMask } from '../../../packages/vue-input-mask/src';

const maskedValue = ref()

</script>

<template>
  <div class="App">
    <h1>Vue Input Mask - Playground</h1>
    <input-mask mask="####" v-model="maskedValue"></input-mask>
    <p>Mask: #### Value: {{ maskedValue }}</p>
    <input-mask mask="$$$$$" v-model="maskedValue"></input-mask>
    <p>Mask: $$$$$ Value: {{ maskedValue }}</p>
    <input-mask mask="##-##-####" v-model="maskedValue"></input-mask>
  </div>
</template>
