<script setup>
  import {onMounted} from 'vue'
  import sdk from '@stackblitz/sdk';

  import Index from './index.html?raw'
  import Main from './main.js?raw'
  import App from './App.vue?raw'

async function run() {
  sdk.embedProject(
  'preview',
  {
    title: 'Vue Input Mask - Native',
    description: 'Demo of @opentf/vue-input-mask directive with native inputs',
    template: 'vue',
    files: {
      'public/index.html': Index,
      'src/main.js': Main,
      'src/App.vue': App,
      'package.json': `{
      "name": "vue-input-mask-native",
      "dependencies": {},
      "stackblitz": { "installDependencies": true }
    }`,
    },
  },
  {
    view: 'preview',
    hideExplorer: true,
    height: 500
  },
);
}

onMounted(() => {
run()
})

</script>

<style>
  #preview {
    width: 100%;
    height: 500px
  }
</style>

# <img style="vertical-align: middle; display: inline;" src="./vuejs-logo.svg" width="50" height="50" /> Native Input

<iframe id="preview"></iframe>
