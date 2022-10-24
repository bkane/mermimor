<template>
    <div>
        <h1 class="text-center pb-4">Episodes</h1>
        <div v-if="loading" class="text-center">
            <img src="@/assets/brad.png" class="loader mx-auto" />
        </div>
        <div v-if="!loading && (episodes == undefined || episodes.length == 0)"><p class="text-center">Nothing yet.</p></div>
        <Episode
            v-for="(episode, index) in episodes"
            :key="episode.id"
            :id="index"
            :name="episode.name"
            :date="episode.date"
            :eliminations="episode.eliminations"
            :survivors_with_filtered_events="episode.survivors_with_filtered_events"
            :advantages_names="advantages_names"
        />
    </div>
</template>

<script>
import axios from "axios";
import Episode from "./Episode.vue";

export default {
    name: "Episodes",
    components: {
        Episode
    },
    data() {
        return {
            episodes: [],
            advantages_names: [],
            loading: true
        };
    },
    methods: {
        async fetchData() {
            console.log("base url: " + axios.defaults.baseURL);
            let season = this.$route.params.season || this.defaultSeason;
            const episodesRequest = await axios.get(`api/${season}/episodes`);
            this.episodes = episodesRequest.data;
            console.log("episodes: ");
            console.log(this.episodes);

            const advantagesRequest = await axios.get(`api/${season}/advantages`);
            const advantages = advantagesRequest.data;
            console.log("advantages: ");
            console.log(advantages);

            if (advantages != undefined && advantages.length > 0) {
                this.advantages_names = advantages.map(a => {
                    return { id: a.id, name: a.name };
                });
                console.log("advantage names: ");
                console.log(this.advantages_names);
            }

            this.loading = false;
        }
    },
    async created() {
        await this.fetchData();
    }
};
</script>

<style></style>
