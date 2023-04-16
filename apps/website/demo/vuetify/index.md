<script setup>
  import {onMounted} from 'vue'
  import sdk from '@stackblitz/sdk';

  import Pkg from './package.json?raw'
  import Index from './index.html?raw'
  import Main from './main.js?raw'
  import App from './App.vue?raw'
  import ViteConfig from './vite.config.js?raw'

async function run() {
  sdk.embedProject(
  'embed',
  {
    title: 'Node Starter',
    description: 'A basic Node.js project',
    template: 'node',
    files: {
      'index.html': Index,
      'package.json': Pkg,
      'src/main.js': Main,
      'src/App.vue': App,
      'vite.config.js': ViteConfig
    },
  },
  {
    openFile: 'src/App.js',
    terminalHeight: 50,
    view: 'preview',
    hideExplorer: false,
    height: 500
  },
);

}

onMounted(() => {
run()
})

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

<iframe id="embed"></iframe>
