<script setup>
  import { SandpackProvider, SandpackLayout, SandpackPreview } from 'sandpack-vue3';
  import Index from './index.html?raw'
</script>

<style>
  #embed {
    width: 100%;
    height: 500px;
    margin-top: 50px;
    border: 1px groove lightgray;
  }
</style>

# <img style="vertical-align: middle; display: inline; height: 50px" src="./element-plus-logo.svg" />

<div id="embed">
 <SandpackProvider
    template="static"
    :files="{'/index.html': Index}">
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
<<<@/demo/element-plus/App.vue
:::
