import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Embed from 'v-video-embed'

createApp(App).use(router).use(Embed).mount('#app')
