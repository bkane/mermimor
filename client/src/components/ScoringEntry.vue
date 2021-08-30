<template>
    <div class="row">
        <div class="col text-start">
            {{name}}
        </div>
        <div class="col-2 text-center">
            {{points}}
        </div>      
    </div>
</template>

<script>
export default {
    name: 'ScoringEntry',
    props: [ 'name', 'points' ]
}
</script>

<style>

</style>