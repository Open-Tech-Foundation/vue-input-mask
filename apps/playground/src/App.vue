<script setup>
import { reactive } from "vue";
import { InputMask } from "../../../packages/vue-input-mask/src";

const state = reactive({
  numberOnly: "",
  creditCard: '',
  stringOnly: "",
  date: "",
  time: "",
});
</script>

<template>
  <div class="App">
    <h1>Vue Input Mask - Playground</h1>
    <pre>
      Tokens:

        # - Number only [0-9]
        $ - String only [A-Z, a-z]
        * - Number or String [a-z, A-Z, 0-9]
        A - Uppercase String [A-Z]
        a - Lowercase String [a-z]
    </pre>
    <table>
      <tbody>
        <tr>
          <td>
            <input-mask mask="####" v-model="state.numberOnly"></input-mask>
          </td>
          <td>Mask: ####</td>
          <td>Value: {{ state.numberOnly }}</td>
        </tr>
        <tr>
          <td>
            <input-mask mask="#### #### #### ####" v-model="state.creditCard"></input-mask>
          </td>
          <td>Mask: #### #### #### #### </td>
          <td>Value: {{ state.creditCard }}</td>
        </tr>
        <tr>
          <td>
            <input-mask mask="$$$$$" v-model="state.stringOnly"></input-mask>
          </td>
          <td>Mask: $$$$$</td>
          <td>Value: {{ state.stringOnly }}</td>
        </tr>
        <tr>
          <td>
            <input-mask mask="##/##/####" v-model="state.date"></input-mask>
          </td>
          <td>Mask: ##/##/####</td>
          <td>Value: {{ state.date }}</td>
        </tr>
        <tr>
          <td>
            <input-mask mask="##:## AA" v-model="state.time"></input-mask>
          </td>
          <td>Mask: ##:## AA</td>
          <td>Value: {{ state.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
