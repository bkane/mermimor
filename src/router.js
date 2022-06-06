import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Standings from "./components/Standings.vue";
import Episodes from "./components/Episodes.vue";
import Survivors from "./components/Survivors.vue";
import Scoring from "./components/Scoring.vue";

export default createRouter({
    history: createWebHashHistory("/mermimor/"),
    routes: [
        {
            path: "/:season(\\d+)/",
            name: "Standings",
            component: Standings
        },
        {
            path: "/:season(\\d+)/episodes",
            name: "Episodes",
            component: Episodes
        },
        {
            path: "/:season(\\d+)/survivors",
            name: "Survivors",
            component: Survivors
        },
        {
            path: "/:season(\\d+)/scoring",
            name: "Scoring",
            component: Scoring
        },
        { path: "/:pathMatch(.*)*", redirect: "/42/" }
    ]
});
