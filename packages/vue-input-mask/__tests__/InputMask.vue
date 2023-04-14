<template>
  <input v-model="value" v-mask="{ mask }" />
</template>

<script setup>
import { ref, defineProps } from "vue";
import { vMask } from "../src";

const props = defineProps(["value", "mask"]);

const value = ref(props.value);
</script>
