<template>
    <div>
        <h1 class="text-center pb-4">Episodes</h1>
        <div v-if="loading" class="text-center">
            <img src="@/assets/brad.png" class="loader mx-auto" />
        </div>
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
            const episodesRequest = await axios.get("api/episodes");
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
