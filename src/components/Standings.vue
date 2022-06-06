<template>
    <div class="row px-2 mb-5">
        <h1 class="text-center mb-5">Season {{ $route.params.season || defaultSeason }} Standings</h1>

        <div style="max-width: 720px" class="mx-auto">
            <table class="table table-striped">
                <StandingsEntry
                    v-for="(entry, index) in teams"
                    :key="entry.id"
                    :id="index"
                    :name="entry.name"
                    :owner="entry.owner"
                    :rank="entry.rank"
                    :picks="entry.picks"
                    :score="entry.score"
                />
            </table>
        </div>
    </div>
    <div v-if="loading" class="text-center">
        <img src="@/assets/brad.png" class="loader mx-auto" />
    </div>
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
            let season = this.$route.params.season || this.defaultSeason;
            console.log(`fetching season ${season}...`);
            const teamsRequest = await axios.get(`api/${season}/teams`);
            this.teams = teamsRequest.data;
            console.log(this.teams);

            this.loading = false;
        }
    },
    async created() {
        console.log("hello");
        await this.fetchData();
    }
};
</script>

<style></style>
