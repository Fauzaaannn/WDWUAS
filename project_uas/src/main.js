import { createApp } from 'vue'
import './style.css'
import App from './App.vue' //ikimu mau gak mok celok// oohh
// import Home from './views/Home.vue'
// import Homelog from './views/Homelog.vue'
// import mancoll from './views/mancoll.vue'
// import womancoll from './views/womancoll.vue'
// import Cart from './views/Cart.vue'
// import Preview from './views/Preview.vue'

import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')
// createApp(Homelog).use(router).mount('#app')
// createApp(mancoll).mount('#app')
// createApp(womancoll).mount('#app')
// createApp(Cart).mount('#app')
// createApp(Preview).mount('#app')
