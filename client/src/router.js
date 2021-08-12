import { createRouter, createWebHistory } from 'vue-router'
import Standings from "./components/Standings.vue"
import Episodes from "./components/Episodes.vue"
import Survivors from "./components/Survivors.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Standings',
            component: Standings
        },
        {
            path: '/episodes',
            name: 'Episodes',
            component: Episodes
        },
        {
            path: '/survivors',
            name: 'Survivors',
            component: Survivors
        }
    ]
})