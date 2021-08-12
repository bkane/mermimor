<template>
    <div>
        <h1>Standings</h1>
        <StandingsEntry
            v-for="entry in teams"
            :key="entry.id"
            :name="entry.name"
            :rank="entry.rank"
            :picks="entry.picks"
            :score="entry.score" /> 
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