<template>
    <div class="row">
        <h1 class="text-center">Scoring</h1>

        <div class="col-lg"></div>
        <div class="col-lg-6">
            <div class="row">
                <div class="col h3 text-start">Rule</div>
                <div class="col-2 h3 text-center">Points</div>
            </div>

            <ScoringEntry
                v-for="entry in scoringRules"
                :key="entry.id"
                :name="entry.name"
                :points="entry.points" /> 
        </div>
        <div class="col-lg"></div>
    </div>
</template>

<script>
import ScoringEntry from './ScoringEntry.vue'
export default {
    name: 'Scoring',
    components: {
        ScoringEntry
    },
  data() {
    return {
      scoringRules: []
    }
  },
  methods: {
    async fetchData() {
            const scoringRequest = await fetch('api/scoring')
            this.scoringRules = await scoringRequest.json()
            console.log(this.scoringRules)
    }
  },
  async created() {
    await this.fetchData()
  }
}
</script>

<style>

</style>