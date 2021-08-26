<template>
    <div>
        <h1>Episodes</h1>
        <Episode 
        v-for="episode in episodes"
        :key="episode.id"
        :name="episode.name"
        :date="episode.date"
        :events="episode.events"
        :survivor_names="survivor_names" />
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
            episodes: [],
            survivor_names: []
        }
    },
    methods: {
        async fetchData() {
            const survivorsRequest = await fetch('api/survivors')
            const survivors = await survivorsRequest.json()
            this.survivor_names = survivors.map(s => { return { id: s.id, name: s.name} })
            console.log(this.survivor_names)


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