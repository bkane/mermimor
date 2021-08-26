<template>
    <div class="">
        <h1 class="text-center my-5 pt-5">Standings</h1>

        <div class="container">
            <div class="row">
                <div class="col-1 h3 text-center">Rank</div>
                <div class="col h3">Team</div>
                <div class="col-1 h3 text-center">Points</div>
            </div>

            <StandingsEntry
                v-for="(entry, index) in teams"
                :key="entry.id"
                :id="index"
                :name="entry.name"
                :rank="entry.rank"
                :picks="entry.picks"
                :score="entry.score" /> 
                </div>

        </div>
</template>

<script>
import StandingsEntry from './StandingsEntry.vue'

export default {
    name: 'Standings',
    components: {
        StandingsEntry
    },
    data() {
        return {
            teams: []
        }
    },
    methods: {
        async fetchData() {
            const teamsRequest = await fetch('api/teams')
            this.teams = await teamsRequest.json()
            console.log(this.teams)
        }
    },
    async created() {
        await this.fetchData()
    }
}
</script>

<style>

</style>