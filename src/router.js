import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Standings from "./components/Standings.vue"
import Episodes from "./components/Episodes.vue"
import Survivors from "./components/Survivors.vue"
import Scoring from "./components/Scoring.vue"

export default createRouter({
    history: createWebHistory('/mermimor/'),
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
        },
        {
            path: '/scoring',
            name: 'Scoring',
            component: Scoring
        }
    ]
})