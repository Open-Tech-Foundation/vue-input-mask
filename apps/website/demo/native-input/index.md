<script setup>
  import { SandpackProvider, SandpackLayout, SandpackPreview, SandpackCodeEditor } from 'sandpack-vue3';
  import Index from './index.html?raw'
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

# <img style="vertical-align: middle; display: inline;" src="./vuejs-logo.svg" width="50" height="50" /> Native Input

<div id="embed">
 <SandpackProvider
    template="static"
    :files="{'/index.html': Index}"
  >
    <SandpackLayout :options="{
        showNavigator: true,
      }">
      <SandpackPreview style="height: 500px" :options="{
        showNavigator: true,
      }" />
    </SandpackLayout>
  </SandpackProvider>
</div>

::: details View Source
<<<@/demo/native-input/App.vue
:::
