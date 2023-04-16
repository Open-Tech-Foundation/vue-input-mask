<script>
import { vMask } from "@opentf/vue-input-mask";
export default {
  data() {
    return {
      raw: "",
    };
  },
  directives: {
    mask: vMask,
  },
};
</script>

<template>
  <div class="App">
    <v-text-field
      label="Credit Card"
      density="compact"
      variant="outlined"
      v-mask="{ mask: '#### #### #### ####' }"
    />
    <v-text-field
      label="Date"
      density="compact"
      variant="outlined"
      v-mask="{ mask: '##/##/####' }"
    />
    <v-text-field
      label="Time"
      density="compact"
      variant="outlined"
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
    <v-text-field
      label="Hex Color"
      density="compact"
      variant="outlined"
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
    <v-text-field
      label="US Phone"
      density="compact"
      variant="outlined"
      v-mask="{ mask: '+1 (###) ###-####', raw: (v) => (raw = v) }"
    />
    <v-alert color="info" density="compact" variant="outlined">
      Raw: {{ raw }}
    </v-alert>
  </div>
</template>

<style>
.App {
  padding: 25px;
}
</style>
