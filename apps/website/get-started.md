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
