<template>
    <div class="row">
        <h1 class="text-center">Scoring</h1>

        <div class="row">
            <div class="col-md-2 col-3 h3 text-center">Points</div>
            <div class="col-md-3 col-9 h3 text-start">Rule</div>
            <div class="col h3 text-start d-none d-md-block">Description</div>
        </div>

        <ScoringEntry
            v-for="entry in scoringRules"
            :key="entry.id"
            :name="entry.name"
            :points="entry.points"
            :description="entry.description"
            :css_class="entry.css"
        />
    </div>

    <div v-if="loading"><p class="loader mx-auto"></p></div>
</template>

<script>
import axios from "axios";
import ScoringEntry from "./ScoringEntry.vue";
export default {
    name: "Scoring",
    components: {
        ScoringEntry
    },
    data() {
        return {
            scoringRules: [],
            loading: true
        };
    },
    methods: {
        async fetchData() {
            const scoringRequest = await axios.get("api/scoring");
            this.scoringRules = scoringRequest.data;
            console.log(this.scoringRules);

            this.loading = false;
        }
    },
    async created() {
        await this.fetchData();
    }
};
</script>

<style></style>
