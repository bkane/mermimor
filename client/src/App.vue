<template>
  <div class="home">  
    <Navbar />
    <section class="container mt-5">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  // data() {
  //   return {
  //     survivors: [],
  //     episodes: [],
  //     teams: []
  //   }
  // },
  // methods: {
  //   async fetchData() {
  //     const survivorsRequest = await fetch('api/survivors')
  //     this.survivors = await survivorsRequest.json()
  //     console.log(this.survivors)

  //     const episodesRequest = await fetch('api/episodes')
  //     this.episodes = await episodesRequest.json()
  //     console.log(this.episodes)
      
  //     const teamsRequest = await fetch('api/teams')
  //     this.teams = await teamsRequest.json()
  //     console.log(this.teams)
  //   }
  // },
  // async created() {
  //   await this.fetchData()
  // }
}
</script>