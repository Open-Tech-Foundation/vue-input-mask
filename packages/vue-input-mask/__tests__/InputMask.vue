<template>
  <input v-model="value" v-mask="{ mask, raw: (v) => (raw = v) }" />
  <p>{{ raw }}</p>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { vMask } from "../src";

const props = defineProps(["value", "mask"]);

const value = ref(props.value);
const raw = ref("");
</script>
