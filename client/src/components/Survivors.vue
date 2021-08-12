<template>
    <div>
        <h1>Survivors</h1>
        <Survivor 
        v-for="survivor in survivors"
        :key="survivor.id"
        :name="survivor.name"
        :points="survivor.points" />
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
      survivors: []
    }
  },
  methods: {
    async fetchData() {
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