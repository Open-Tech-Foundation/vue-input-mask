<script setup>
import { reactive } from "vue";
import { vMask } from "../../../packages/vue-input-mask/src";

const state = reactive({
  creditCard: "",
});

const raw = reactive({
  price: "",
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
            <el-input
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
      </tbody>
    </table>
  </div>
</template>
