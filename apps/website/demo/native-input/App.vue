<script setup>
import { ref } from "vue";
import { vMask } from "@opentf/vue-input-mask";

const raw = ref("");
</script>

<template>
  <table>
    <tbody>
      <tr>
        <td>
          <label>Date</label>
        </td>
        <td>
          <input v-mask="{ mask: '##/##/####' }" />
        </td>
      </tr>
      <tr>
        <td>
          <label>Time</label>
        </td>
        <td>
          <input
          v-mask="{
              mask: '##:## @M',
              tokens: {
                '@': {
                  pattern: '[AP]',
                  transform: (v) => v.toLocaleUpperCase(),
                },
              },
            }"
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>Credit Card</label>
        </td>
        <td>
          <input v-mask="{ mask: '#### #### #### ####' }" />
        </td>
      </tr>
      <tr>
        <td>
          <label>US Phone</label>
        </td>
        <td>
          <input
            v-mask="{ mask: '+1 (###) ###-####', raw: (v) => (raw = v) }"
          />
        </td>
        <td>Raw: {{ raw }}</td>
      </tr>
      <tr>
        <td>
          <label>Hex Color</label>
        </td>
        <td>
          <input
            v-mask="{
              mask: '\\#FFFFFF',
              tokens: {
                F: {
                  pattern: /[0-9a-fA-F]/,
                  transform: (v) => v.toLocaleUpperCase(),
                },
              },
            }"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
td:first-child {
  text-align: right;
}

td {
  padding: 10px;
}
</style>
