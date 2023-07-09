<script setup>
import { reactive } from "vue";
import { vMask } from "../../../packages/vue-input-mask/src";
import CustomInput from "./CustomInput.vue";

const state = reactive({
  customInput: "888",
  numbers: "1234",
  creditCard: "1234",
  creditCard2: "12345678",
});
</script>

<template>
  <div class="App">
    <h1>Vue Input Mask - Playground</h1>
    <div style="display: flex">
      <div>
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
      </div>

      <div style="padding: 25px;">
        <table>
          <tbody>
            <!-- <tr>
              <td>
                <custom-input
                  v-model="state.customInput"
                  v-mask="{ mask: '###' }"
                ></custom-input>
              </td>
            </tr> -->
            <tr>
              <td>
                <input v-model="state.numbers" v-mask="{ mask: '# # # # #' }" />
              </td>
              <td>Mask: # # # # #</td>
            </tr>
            <tr>
              <td>
                <input v-mask="{ mask: '\\# # \\A A \\a a' }" />
              </td>
              <td>Mask: '\\# # \\A A \\a a'</td>
            </tr>
            <!-- <tr>
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
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.App {
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

td {
  padding: 10px;
}
</style>
