<template>
  <input v-model="value" v-mask="{ mask, raw: (v) => (raw = v), tokens: tokens }" />
  <p>{{ raw }}</p>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { vMask } from "../src";

const props = defineProps(["value", "mask", "tokens"]);

const value = ref(props.value);
const raw = ref("");
</script>
