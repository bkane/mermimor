import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router)

app.config.globalProperties.seasonTitle = "Season 42";

app.mount('#app')
