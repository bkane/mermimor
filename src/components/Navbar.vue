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
                            <router-link :to="{ name: 'Standings', params: { season: 42 } }" class="dropdown-item">Season 42</router-link>
                            <router-link :to="{ name: 'Standings', params: { season: 41 } }" class="dropdown-item">Season 41</router-link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </nav>

    <div v-if="nextSeasonCountdown > Date.now()">
        <div class="pt-2">
            <Countdown :targetDate="nextSeasonCountdown" targetName="Season 42" />
        </div>
    </div>
</template>

<script>
import Countdown from "./Countdown.vue";

export default {
    name: "Navbar",
    props: ["nextSeasonCountdown"],
    components: { Countdown },
    watch: {
        $route() {
            this.$refs.navbarMenuCollapse.classList.remove("show");
        }
    }
};
</script>

<style></style>
