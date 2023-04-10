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
  "#": { pattern: "[0-9]" },
  $: { pattern: "[A-Za-z]" },
  "*": { pattern: "[A-Za-z0-9]" },
  A: { pattern: "[A-Z]", tranform: (c) => c.toLocaleUpperCase() },
  a: { pattern: "[a-z]", transform: (c) => c.toLocaleLowerCase() },
};
const maskChar = "_";

let curInputVal = "";

onMounted(() => {
  init();
  emit("update:modelValue", inputValRef.value);
});

function init() {
  const str = mask("");
  inputValRef.value = str;
  curInputVal = str;
}

function setInputVal(newVal) {
  inputValRef.value = newVal;
  curInputVal = newVal;
  emit("update:modelValue", newVal);
}

function handleChange(e) {
  const tmpInputVal = curInputVal;
  const { selectionStart } = e.target;
  const cursorPos = selectionStart - 1;

  switch (e.inputType) {
    case "insertText":
      setInputVal(mask(replaceAt(inputValRef.value, selectionStart)));
      const nextCursorPos =
        tmpInputVal !== curInputVal ? selectionStart : cursorPos;
      nextTick(() => {
        input.value.setSelectionRange(nextCursorPos, nextCursorPos);
      });
      break;
    case "deleteContentBackward":
      setInputVal(replaceAt(curInputVal, selectionStart, maskChar));
      nextTick(() => {
        input.value.setSelectionRange(selectionStart, selectionStart);
      });
      break;
    case "deleteContentForward":
      break;
    default:
      break;
  }
}

function mask(newVal) {
  let str = "";
  for (let i = 0; i < props.mask.length; i++) {
    const token = props.mask[i];
    const tokenObj = tokens[token];
    if (!tokenObj) {
      str += token;
      continue;
    }
    const regExp = new RegExp(tokenObj.pattern);
    if (!newVal[i] || newVal[i] === maskChar) {
      str += maskChar;
      continue;
    }
    str += regExp.test(newVal[i]) ? newVal[i] : maskChar;
  }

  return str;
}
</script>
