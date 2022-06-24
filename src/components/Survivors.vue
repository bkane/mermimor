<template>
    <div class="row">
        <h1 class="text-center">Survivors</h1>
        <div v-if="loading" class="text-center">
            <img src="@/assets/brad.png" class="loader mx-auto" />
        </div>
        <div v-if="!loading && (survivors == undefined || survivors.length == 0)"><p class="text-center">Nothing yet.</p></div>
        <div
            class="
                row row-cols-1 row-cols-md-2 row-cols-lg-3
                g-2 g-lg-4
                d-flex
                flex-wrap
            "
        >
            <Survivor
                v-for="(survivor, index) in survivors"
                :key="survivor.id"
                :id="index"
                :photo_url="survivor.photo"
                :name="survivor.name"
                :points="survivor.points"
                :team_id="survivor.team_id"
                :eliminated="survivor.eliminated"
                :age="survivor.age"
                :bio="survivor.bio"
                :tribes="survivor.tribes"
                :team_names="team_names"
                :episode_names="episode_names"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Survivor from "./Survivor.vue";

export default {
    name: "Survivors",
    components: {
        Survivor
    },
    data() {
        return {
            survivors: [],
            team_names: [],
            episode_names: [],
            loading: true
        };
    },
    methods: {
        async fetchData() {
            let season = this.$route.params.season || this.defaultSeason;

            const teamsRequest = await axios.get(`api/${season}/teams`);
            const teams = teamsRequest.data;
            this.team_names = teams.map(t => {
                return { id: t.id, name: t.name };
            });
            console.log(this.team_names);

            const episodesRequest = await axios.get(`api/${season}/episodes`);
            const episodes = episodesRequest.data;
            this.episode_names = episodes.map(e => {
                return { id: e.id, name: e.name };
            });
            console.log(this.episode_names);

            const survivorsRequest = await axios.get(`api/${season}/survivors`);
            this.survivors = survivorsRequest.data;
            console.log(this.survivors);

            this.loading = false;
        }
    },
    async created() {
        await this.fetchData();
    }
};
</script>

<style></style>
