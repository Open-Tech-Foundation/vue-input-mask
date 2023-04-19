<!-- CustomInput.vue -->
<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<template>
  <input
  class="my-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style>
.my-input {
  all: revert;
  border: 1px solid black;
}
</style>
