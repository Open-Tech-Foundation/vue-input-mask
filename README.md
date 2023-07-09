<div align="center">

# Vue Input Mask

⚡ by [OPEN TECH FOUNDATION](https://open-tech-foundation.pages.dev/)


![](https://raw.githubusercontent.com/Open-Tech-Foundation/vue-input-mask/main/apps/website/public/demo.png)

</div>

[![Build](https://github.com/open-tech-foundation/vue-input-mask/actions/workflows/build.yml/badge.svg)](https://github.com/open-tech-foundation/vue-input-mask/actions/workflows/build.yml)

> The input mask directive for Vue.js.

## Demo

- [Native Input](https://vue-input-mask.pages.dev/demo/native-input/)

- [Vuetify](https://vue-input-mask.pages.dev/demo/vuetify/)

- [Element Plus](https://vue-input-mask.pages.dev/demo/element-plus/)

## Features

- Simple API

- Lightweight ~1.5 KB Gzipped

- RegExp Support

- Custom tokens

- Get raw/unmasked values via callback fn

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
import { vMask } from "@opentf/vue-input-mask";
</script>

<template>
  <input v-mask="{ mask: '#####' }" />
</template>
```

```
Default Tokens:

#  - Number only, [0-9]
$  - Char only, [A-Z, a-z]
*  - Number or Char, [a-z, A-Z, 0-9]
A  - Uppercase char [A-Z], transform: (c) => c.toLocaleUpperCase()
a  - Lowercase char [a-z], transform: (c) => c.toLocaleLowerCase()
\\ - Escape token, eg: \\$
{} - Regular expression, eg: {[A-F]}
```

## Documentation

Please visit [https://vue-input-mask.pages.dev](https://vue-input-mask.pages.dev/) to get started.

## License

Copyright (c) [Thanga Ganapathy](https://github.com/Thanga-Ganapathy) ([MIT License](./LICENSE)).
