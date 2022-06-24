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
            loading: true
        };
    },
    methods: {
        async fetchData() {
            console.log("base url: " + axios.defaults.baseURL);
            let season = this.$route.params.season || this.defaultSeason;
            const episodesRequest = await axios.get(`api/${season}/episodes`);
            this.episodes = episodesRequest.data;
            console.log(this.episodes);

            this.loading = false;
        }
    },
    async created() {
        await this.fetchData();
    }
};
</script>

<style></style>
