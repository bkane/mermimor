<template>
    <div class="row px-2 mb-5">
        <h1 class="text-center mb-5">{{ seasonTitle }} Standings</h1>

        <div class="col-lg"></div>
        <div class="col-lg-6">
            <table class="table table-striped">
                <StandingsEntry
                    v-for="(entry, index) in teams"
                    :key="entry.id"
                    :id="index"
                    :name="entry.name"
                    :rank="entry.rank"
                    :picks="entry.picks"
                    :score="entry.score"
                />
            </table>
        </div>
        <div class="col-lg"></div>
    </div>
    <div v-if="loading"><p class="loader mx-auto"></p></div>
</template>

<script>
import axios from "axios";
import StandingsEntry from "./StandingsEntry.vue";

export default {
    name: "Standings",
    components: {
        StandingsEntry
    },
    data() {
        return {
            teams: [],
            loading: true
        };
    },
    methods: {
        async fetchData() {
            const teamsRequest = await axios.get("api/teams");
            this.teams = teamsRequest.data;
            console.log(this.teams);

            this.loading = false;
        }
    },
    async created() {
        await this.fetchData();
    }
};
</script>

<style></style>
