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
    <div>
      <v-text-field
        label="Date"
        density="compact"
        variant="outlined"
        v-model="state.date"
        v-mask="{ mask: '##/##/####' }"
      />
    </div>
    <div>
      <v-text-field
        label="Time"
        density="compact"
        variant="outlined"
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
      />
    </div>
    <div>
      <v-text-field
        label="Credit Card"
        density="compact"
        variant="outlined"
        v-model="state.creditCard"
        v-mask="{ mask: '#### #### #### ####' }"
      />
    </div>
    <div>
      <v-text-field
        label="Hex Color"
        density="compact"
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
      />
    </div>
    <div>
      <v-text-field
        label="US Phone"
        density="compact"
        variant="outlined"
        v-model="state.usPhone"
        v-mask="{ mask: '+1 (###) ###-####', raw: (v) => (raw = v) }"
      />
    </div>
    <div>
      <v-alert color="info" density="compact" variant="outlined">
        Raw: {{ raw }}
      </v-alert>
    </div>
  </div>
</template>

<style>
.App {
  padding: 25px;
}
</style>
