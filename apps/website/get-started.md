# Getting Started

## Installation

::: code-group

```sh [npm]
npm install @opentf/vue-input-mask
```

```sh [yarn]
yarn add @opentf/vue-input-mask
```

```sh [pnpm]
pnpm add @opentf/vue-input-mask
```

:::

## Usage

```vue
<script setup>
  import { vMask } from "@opentf/vue-input-mask";
</script>

<template>
  <input v-mask="{ mask: '###' }" />
</template>
```

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
