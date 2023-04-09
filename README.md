<div align="center">

# Vue Input Mask

⚡ by [OPEN TECH FOUNDATION](https://open-tech-foundation.pages.dev/)

[![Build](https://github.com/open-tech-foundation/vue-input-mask/actions/workflows/build.yml/badge.svg)](https://github.com/open-tech-foundation/vue-input-mask/actions/workflows/build.yml)

</div>

> The input mask for Vue.js.

## Features

- Simple APIs to use

## Installation

Using npm

```shell
npm install @opentf/vue-input-mask
```

Using Yarn

```shell
yarn add @opentf/vue-input-mask
```

Using pnpm

```shell
pnpm add @opentf/vue-input-mask
```

## Usage

```vue
<script setup>
import { InputMask } from "@opentf/vue-input-mask";
</script>

<template>
  <div class="App">
    <input-mask mask="##-##-####" v-model="maskedValue"></input-mask>
  </div>
</template>
```

## License

Copyright (c) [Thanga Ganapathy](https://github.com/Thanga-Ganapathy) ([MIT License](./LICENSE)).
