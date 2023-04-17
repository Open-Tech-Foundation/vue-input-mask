<script setup>
  import { SandpackProvider, SandpackLayout, SandpackPreview } from 'sandpack-vue3';
  import Main from './main.js?raw'
  import App from './App.vue?raw'
</script>

<style>
  #embed {
    width: 100%;
    height: 500px;
    margin-top: 50px;
    border: 1px groove lightgray;
  }
</style>

# <img style="vertical-align: middle; display: inline;" src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-dark.svg" width="50" height="50" /> Vuetify

<div id="embed">
 <SandpackProvider
    template="vite-vue"
    :files="{'/src/App.vue': App, '/src/main.js': Main}" :customSetup="{ 
        dependencies: { 
          '@opentf/vue-input-mask': 'latest',
          'vuetify': 'latest'
        }
      }"
    :options="{
        showNavigator: true,
      }"  
  >
    <SandpackLayout>
      <SandpackPreview style="height: 500px" />
    </SandpackLayout>
  </SandpackProvider>     
</div>


::: details View Source
<<<@/demo/vuetify/App.vue
:::