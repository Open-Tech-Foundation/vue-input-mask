<template>
  <input ref="input" type="text" v-model="inputValRef" @input="handleChange" />
</template>

<script setup>
/*
Tokens:
# - Number only [0-9]
$ - String only [A-Z, a-z]
* - Number or String [a-z, A-Z, 0-9]
A - Uppercase String [A-Z]
a - Lowercase String [a-z]
*/
import { ref, onMounted, nextTick } from "vue";
import { replaceAt } from "@opentf/utils";

const props = defineProps(["mask"]);
const emit = defineEmits(["update:modelValue"]);
const input = ref(null);
const inputValRef = ref();
const tokens = {
  "#": "[0-9]",
  $: "[A-Za-z]",
  "*": "[A-Za-z0-9]",
  A: "[A-Z]",
  a: "[a-z]",
};

let curInputVal = "";

onMounted(() => {
  init();
  emit("update:modelValue", inputValRef.value);
});

function init() {
  const str = [];
  for (let c of props.mask) {
    Object.keys(tokens).includes(c) ? str.push("_") : str.push(c);
  }
  inputValRef.value = str.join("");
  curInputVal = str.join("");
}

function setInputVal(newVal) {
  inputValRef.value = newVal;
  curInputVal = newVal;
  emit("update:modelValue", newVal);
}

function handleChange(e) {
  const { selectionStart, selectionEnd } = e.target;
  console.log(selectionStart, selectionEnd);
  const cursorPos = e.target.selectionStart - 1;
  if (!props.mask[cursorPos]) {
    setInputVal(replaceAt(curInputVal, cursorPos));
    return;
  }
  const tokenPattern = tokens[props.mask[cursorPos]];
  console.log(inputValRef.value, e.data, cursorPos, props.mask[cursorPos]);
  const regExp = new RegExp(tokenPattern);
  const newVal = regExp.test(e.data)
    ? replaceAt(curInputVal, cursorPos, e.data)
    : replaceAt(curInputVal, cursorPos, curInputVal[cursorPos]);
  setInputVal(newVal);
  nextTick(() => {
    input.value.setSelectionRange(selectionStart, selectionEnd);
  });
}
</script>
