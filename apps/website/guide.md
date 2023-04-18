<script setup>
  import {ref} from 'vue'
  import {vMask} from '@opentf/vue-input-mask';

  const raw = ref('')
</script>

<style>
input {
    all: revert;
    padding: 10px;
}
</style>

# Guide

## Default Tokens

```
#  - Number only, [0-9]
$  - Char only, [A-Z, a-z]
*  - Number or Char, [a-z, A-Z, 0-9]
A  - Uppercase char [A-Z], transform: (c) => c.toLocaleUpperCase()
a  - Lowercase char [a-z], transform: (c) => c.toLocaleLowerCase()
\\ - Escape token, eg: \\$
{} - Regular expression, eg: {[A-F]}
```

## Props

| Name   |   Type   | Required | Default   | Description                                                   |
| ------ | :------: | -------: | --------- | ------------------------------------------------------------- |
| mask   |  String  |      Yes | ''        | The input mask pattern                                        |
| tokens |  Object  |       No | {}        | The custom tokens                                             |
| raw    | Function |       No | undefined | The callback function, wich will receive the raw input value. |

## Escape token char

<input v-mask="{ mask: '\\$ ##.##' }" />

```vue
<script setup>
import { vMask } from "@opentf/vue-input-mask";
</script>

<template>
  <input v-mask="{ mask: '\\$ ##.##' }" />
</template>
```

## Get raw value

<input v-mask="{ mask: '+1 (###) ###-####', raw: (v) => raw = v }" />
<p>Raw: {{ raw }}</p>

```vue
<script setup>
import { ref } from "vue";
import { vMask } from "@opentf/vue-input-mask";

const raw = ref("");
</script>

<template>
  <input v-mask="{ mask: '+1 (###) ###-####', raw: (v) => (raw = v) }" />
  <p>Raw: {{ raw }}</p>
</template>
```

## Custom Token

<input v-mask="{
                mask: '##:## @M',
                tokens: {
                  '@': {
                    pattern: '[AP]',
                    transform: (v) => v.toLocaleUpperCase(),
                  },
                },
              }"
              />

```vue
<script setup>
import { vMask } from "@opentf/vue-input-mask";
</script>

<template>
  <input
    v-mask="{
      mask: '##:## @M',
      tokens: {
        '@': {
          pattern: '[AP]',
          transform: (v) => v.toLocaleUpperCase(),
        },
      },
    }"
  />
</template>
```
