<script setup>
import { reactive } from "vue";
import { vMask } from "../../../packages/vue-input-mask/src";

const state = reactive({
  vuetify: "123",
  numberOnly: "1",
  creditCard: "",
  stringOnly: "",
  date: "",
  time: "",
  upper: ""
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
            <v-text-field
              v-mask="{mask: 'AA'}"
              label="Label"
              variant="outlined"
              v-model="state.upper"
            ></v-text-field>
          </td>
          <td>Mask: AA</td>
          <td>Value: {{ state.upper }}</td>
        </tr>
        <tr>
          <td>
            <v-text-field
              v-mask="'#####'"
              label="Label"
              variant="outlined"
              v-model="state.vuetify"
            ></v-text-field>
          </td>
          <td>Mask: #####</td>
          <td>Value: {{ state.vuetify }}</td>
        </tr>
        <tr>
          <td>
            <input v-mask="'####'" v-model="state.numberOnly" />
          </td>
          <td>Mask: ####</td>
          <td>Value: {{ state.numberOnly }}</td>
        </tr>
        <tr>
          <td>
            <input v-mask="'#### #### #### ####'" v-model="state.creditCard" />
          </td>
          <td>Mask: #### #### #### ####</td>
          <td>Value: {{ state.creditCard }}</td>
        </tr>
        <tr>
          <td>
            <input v-mask="'$$$$$'" v-model="state.stringOnly" />
          </td>
          <td>Mask: $$$$$</td>
          <td>Value: {{ state.stringOnly }}</td>
        </tr>
        <tr>
          <td>
            <input v-mask="'##/##/####'" v-model="state.date" />
          </td>
          <td>Mask: ##/##/####</td>
          <td>Value: {{ state.date }}</td>
        </tr>
        <tr>
          <td>
            <input v-mask="'##:## {[AP]}M'" v-model="state.time" />
          </td>
          <td>Mask: ##:## {[AP]}M</td>
          <td>Value: {{ state.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
