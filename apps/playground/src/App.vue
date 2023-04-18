<script setup>
import { reactive } from "vue";
import { vMask } from "../../../packages/vue-input-mask/src";

const state = reactive({
  numbers: "1 23",
  creditCard: "1234",
  creditCard2: ''
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
        \\ - Escape token char
        {} - Regurlar expression
    </pre>
    <table>
      <tbody>
        <tr>
          <td>
            <input v-model="state.numbers" v-mask="{ mask: '# # # # #' }" />
          </td>
          <td>Mask: # # # # #</td>
        </tr>
        <tr>
          <td>
            <v-text-field
              placeholder="Please input"
              v-model="state.creditCard"
              v-mask="{ mask: '#### #### #### ####' }"
            />
          </td>
          <td>Mask: #### #### #### ####</td>
          <td>
            {{ state.creditCard }}
          </td>
        </tr>
        <tr>
          <td>
            <el-input
              placeholder="Please input"
              v-model="state.creditCard2"
              v-mask="{ mask: '#### #### #### ####' }"
            />
          </td>
          <td>Mask: #### #### #### ####</td>
          <td>
            {{ state.creditCard2 }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.App {
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

td {
  padding: 10px;
}
</style>
