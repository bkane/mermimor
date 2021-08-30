<template>
    <div class="row">
        <h1 class="text-center">Survivors</h1>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-4 d-flex flex-wrap">
          <Survivor 
          v-for="(survivor, index) in survivors"
          :key="survivor.id"
          :id="index"
          :photo_url="survivor.photo"
          :name="survivor.name"
          :points="survivor.points"
          :team_id="survivor.team_id"
          :voted_out="survivor.voted_out"
          :age="survivor.age"
          :bio="survivor.bio"
          :tribes="survivor.tribes"
          :team_names="team_names" 
          :episode_names="episode_names" />
        </div>
    </div>
</template>

<script>
import Survivor from './Survivor.vue'

export default {
    name: 'Survivors',
    components: {
        Survivor
    },
  data() {
    return {
      survivors: [],
      team_names: [],
      episode_names: []
    }
  },
  methods: {
    async fetchData() {
      const teamsRequest = await fetch('api/teams')
      const teams = await teamsRequest.json()
      this.team_names = teams.map(t => { return { id: t.id, name: t.name} })
      console.log(this.team_names)

      const episodesRequest = await fetch('api/episodes')
      const episodes = await episodesRequest.json()
      this.episode_names = episodes.map(e => { return { id: e.id, name: e.name} })
      console.log(this.episode_names)

      const survivorsRequest = await fetch('api/survivors')
      this.survivors = await survivorsRequest.json()
      console.log(this.survivors)
    }
  },
  async created() {
    await this.fetchData()
  }
}
</script>

<style>

</style>