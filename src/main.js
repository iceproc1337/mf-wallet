import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Framework7 from 'framework7';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

var framework7App = new Framework7({
    theme: 'ios', // can be 'auto' and 'md' also
    navbar: {
        mdCenterTitle: true
    },
});
window.framework7App = framework7App;
