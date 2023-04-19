<script setup>
import { ref, reactive } from "vue";
import { vMask } from "@opentf/vue-input-mask";

const raw = ref("");
const state = reactive({
  date: "",
  time: "",
  creditCard: "",
  usPhone: "0123456789",
  hex: "",
});
</script>

<template>
  <div id="app">
    <table>
      <tbody>
        <tr>
          <td>
            <label>Date</label>
          </td>
          <td>
            <el-input
              v-model="state.date"
              v-mask="{ mask: '##/##/####' }"
            ></el-input>
          </td>
        </tr>
        <tr>
          <td>
            <label>Time</label>
          </td>
          <td>
            <el-input
              v-model="state.time"
              v-mask="{
                mask: '##:## @M',
                tokens: {
                  '@': {
                    pattern: '[AP]',
                    transform: (v) => v.toLocaleUpperCase(),
                  },
                },
              }"
            ></el-input>
          </td>
        </tr>
        <tr>
          <td>
            <label>Credit Card</label>
          </td>
          <td>
            <el-input
              v-mask="{ mask: '#### #### #### ####' }"
              v-model="state.creditCard"
            ></el-input>
          </td>
        </tr>
        <tr>
          <td>
            <label>US Phone</label>
          </td>
          <td>
            <el-input
              v-model="state.usPhone"
              v-mask="{ mask: '+1 (###) ###-####', raw: (v) => (raw = v) }"
            ></el-input>
          </td>
          <td>
            <el-text class="mx-1" type="primary">Raw: {{ raw }}</el-text>
          </td>
        </tr>
        <tr>
          <td>
            <label>Hex Color</label>
          </td>
          <td>
            <el-input
              v-model="state.hex"
              v-mask="{
                mask: '\\#FFFFFF',
                tokens: {
                  F: {
                    pattern: /[0-9a-fA-F]/,
                    transform: (v) => v.toLocaleUpperCase(),
                  },
                },
              }"
            ></el-input>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
td:first-child {
  text-align: right;
}

td {
  padding: 10px;
}
</style>
