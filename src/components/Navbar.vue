<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">
                <div class="hstack">
                    <img src="@/assets/jeff.png" height="64" alt="jeffff" class="d-inline-block align-bottom px-3" />
                    <div class="vstack">
                        <div class="display-5 py-0">Mermimor</div>
                        <div class="navbar-text fs-6 fw-lighter fst-italic py-0">
                            come on in <span class="text-decoration-line-through">guys</span>
                        </div>
                    </div>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>

            <nav class="collapse navbar-collapse" id="navbarNavDropdown" ref="navbarMenuCollapse">
                <ul class="navbar-nav text-end">
                    <li class="navbar-item">
                        <router-link
                            :to="{ name: 'Standings', params: { season: $route.params.season || this.defaultSeason } }"
                            class="nav-link navbar-link"
                            >Standings</router-link
                        >
                    </li>
                    <li class="navbar-item">
                        <router-link
                            :to="{ name: 'Episodes', params: { season: $route.params.season || this.defaultSeason } }"
                            class="nav-link navbar-link"
                            >Episodes</router-link
                        >
                    </li>
                    <li class="navbar-item">
                        <router-link
                            :to="{ name: 'Survivors', params: { season: $route.params.season || this.defaultSeason } }"
                            class="nav-link navbar-link"
                            >Survivors</router-link
                        >
                    </li>
                    <li class="navbar-item">
                        <router-link
                            :to="{ name: 'Advantages', params: { season: $route.params.season || this.defaultSeason } }"
                            class="nav-link navbar-link"
                            >Advantages</router-link
                        >
                    </li>
                    <li class="navbar-item">
                        <router-link
                            :to="{ name: 'Scoring', params: { season: $route.params.season || this.defaultSeason } }"
                            class="nav-link navbar-link"
                            >Scoring</router-link
                        >
                    </li>
                    <li class="navbar-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-bs-toggle="dropdown"
                            data-bs-display="inline"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Season {{ $route.params.season }}
                        </a>
                        <div
                            class="dropdown-menu dropdown-menu-dark dropdown-menu-end text-end ms-auto"
                            aria-labelledby="navbarDropdownMenuLink"
                            style="max-width: 200px;"
                        >
                            <router-link
                                v-for="season in seasonsList"
                                :key="season.name"
                                :to="{ name: 'Standings', params: { season: season.id } }"
                                class="dropdown-item"
                            >
                                {{ season.name }}</router-link
                            >
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </nav>

    <div v-if="currentSeason && currentSeason.airDate > Date.now()">
        <div class="pt-2">
            <Countdown :targetDate="currentSeason.airDate" :targetName="currentSeason.name" />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Countdown from "./Countdown.vue";

export default {
    name: "Navbar",
    components: { Countdown },
    data() {
        return {
            seasonsList: [],
            currentSeason: {}
        };
    },
    methods: {
        updateCountdown() {
            let seasonID = this.$route.params.season || this.defaultSeason;
            this.currentSeason = this.seasonsList.find(s => s.id == seasonID);

            if (this.currentSeason != undefined) {
                console.log(
                    `Current season is ${seasonID}. Season Data: ${this.currentSeason.name}, ${this.currentSeason.airDate}, ${this.currentSeason.id}`
                );
            } else {
                console.log(`Current season is ${seasonID}, but season data has not been retrieved yet.`);
            }
        },
        async fetchData() {
            const seasonsListRequest = await axios.get("api/seasons");
            this.seasonsList = seasonsListRequest.data.map(s => {
                return { id: s.id, name: s.name, airDate: new Date(s.airDate) };
            });

            console.log(this.seasonsList);
        }
    },
    async created() {
        await this.fetchData();
        this.updateCountdown();
    },
    watch: {
        $route() {
            this.$refs.navbarMenuCollapse.classList.remove("show");
            this.updateCountdown();
        }
    }
};
</script>

<style></style>
