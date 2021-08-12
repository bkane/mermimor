<template>
    <div class="card pb-3">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h3 class="card-title">{{name}}</h3>
            <p class="card-text"><small class="text-muted">{{points}} pts</small></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Survivor',
    props: ['name', 'points']
}
</script>

<style>

</style>