<template>
    <div>
        <h1>Episodes</h1>
        <Episode 
        v-for="episode in episodes"
        :key="episode.id"
        :name="episode.name"
        :date="episode.date"
        :events="episode.events" />
    </div>
</template>

<script>
import Episode from './Episode.vue'

export default {
    name: "Episodes",
    components: {
        Episode
    },  
    data() {
        return {
            episodes: []
        }
    },
    methods: {
        async fetchData() {
            const episodesRequest = await fetch('api/episodes')
            this.episodes = await episodesRequest.json()
            console.log(this.episodes)
        }
    },
    async created() {
        await this.fetchData()
    }
}
</script>

<style>

</style>