import './static/fonts/material-icons/material-icons.css'
import './static/fonts/roboto/roboto.css'
import 'vuetify/dist/vuetify.min.css'

// import Vue from 'vue/dist/vue.min'
import Vue from './vue-init'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
    routes: [
        { path: '/here', component: { template: '<pre>This is Here</pre>' } },
        { path: '/there', component: { template: '<pre>There it is</pre>' } },
    ]
})


import App from './src/app.vue'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

window.r = router
