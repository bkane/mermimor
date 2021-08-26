<template>
    <div class="list-group-item">
        <div class="d-flex w-100 justify-content-between align-items-center">
            <h4>[{{rank}}]</h4>
            <h3>{{name}}</h3>
            <small class="ms-auto">{{score}} pts</small>
        </div>
        
        <ul v-for="pick in picks"
        :key="pick.id">
            <li>{{pick.name}} - {{pick.points}} pts</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'StandingsEntry',
    props: [ 'rank', 'name', 'score', 'picks' ]
}
</script>

<style>

</style>