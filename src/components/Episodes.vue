<template>
    <div>
        <h1 class="text-center pb-4">Episodes</h1>
        <div v-if="loading"><p class="loader mx-auto"></p></div>
        <Episode
            v-for="episode in episodes"
            :key="episode.id"
            :name="episode.name"
            :date="episode.date"
            :events="episode.events"
            :survivor_names="survivor_names"
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
            survivor_names: [],
            loading: true
        };
    },
    methods: {
        async fetchData() {
            console.log("base url: " + axios.defaults.baseURL);
            const survivorsRequest = await axios.get("api/survivors");
            console.log(survivorsRequest);

            const survivors = survivorsRequest.data;
            this.survivor_names = survivors.map(s => {
                return { id: s.id, name: s.name };
            });
            console.log(this.survivor_names);

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
